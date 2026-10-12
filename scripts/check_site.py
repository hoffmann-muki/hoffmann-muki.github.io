"""Validate the generated static website without third-party dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent / "_site"
errors = []


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.ids, self.links, self.h1 = path, set(), [], 0
        self.title, self.description, self.canonical = False, False, False
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            if attrs["id"] in self.ids:
                errors.append(f"{self.path}: duplicate id {attrs['id']}")
            self.ids.add(attrs["id"])
        self.h1 += tag == "h1"
        self.title |= tag == "title"
        self.description |= tag == "meta" and attrs.get("name") == "description" and bool(attrs.get("content"))
        self.canonical |= tag == "link" and attrs.get("rel") == "canonical"
        for key in ("href", "src"):
            if attrs.get(key):
                self.links.append(attrs[key])
        if tag == "img" and not attrs.get("alt"):
            errors.append(f"{self.path}: image has no alternate text")


if not ROOT.exists():
    sys.exit("Build the website before running this check.")
pages = {path.resolve(): Page(path) for path in ROOT.rglob("*.html")}
for path, page in pages.items():
    if page.h1 != 1 or not (page.title and page.description and page.canonical):
        errors.append(f"{path}: missing page metadata or expected single h1")
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        target = ROOT / unquote(url.path).lstrip("/") if url.path.startswith("/") else path.parent / unquote(url.path) if url.path else path
        if target.is_dir():
            target /= "index.html"
        target = target.resolve()
        if not target.is_relative_to(ROOT.resolve()) or not target.exists():
            errors.append(f"{path}: broken local link {link}")
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f"{path}: missing fragment in {link}")
for path in ROOT.rglob("*"):
    if path.is_file() and (path.suffix.lower() == ".pdf" or "cv" in path.name.lower() or "resume" in path.name.lower()):
        errors.append(f"CV or PDF asset included in build: {path}")
for required in ("index.html", "research/index.html", "projects/index.html", "books/index.html", "404.html", "robots.txt", "sitemap.xml"):
    if not (ROOT / required).exists():
        errors.append(f"Missing output: {required}")
try:
    ET.parse(ROOT / "sitemap.xml")
except (OSError, ET.ParseError) as error:
    errors.append(f"Invalid sitemap: {error}")
if errors:
    sys.exit("\n".join(errors))
print(f"PASS: {len(pages)} pages; local links, fragments, image descriptions, metadata, sitemap, and no CV/PDF assets.")
