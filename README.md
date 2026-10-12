# Hoffmann Muki's website

A custom Jekyll academic website, visually informed by Benjamin Peeters and Homa Hosseinmardi. Pages: About, Research, Projects, and Books. No CV page or downloadable CV is included.

## Run locally

Use Ruby 4.0 and Bundler. On Apple Silicon macOS with Homebrew Ruby:

```sh
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
./bin/dev
```

Open http://127.0.0.1:4000. The server rebuilds after source changes; refresh the browser to see them.

## Edit content

- Introduction: `index.html`
- Bio timeline: `_data/bio.yml`
- Publication records and citations: `_data/publications.yml`
- Projects and community: `projects.html`
- Books, covers, and topics: `_data/books.yml` and `assets/books/`
- Profile links: `_data/social.yml`
- Design: `assets/css/site.css`

The supplied CV was used only as a private background reference. It is not copied into the site. The research introduction follows the owner's newer description rather than the older CV research-focus line. Publication metadata follows the latest arXiv records; SpCCL was formerly titled “Adaptive Space-efficient Collectives for Dynamic and Unstructured Sparsity on GPU Platforms.” Founder dates and project background come from the supplied CV.

The primary research interest is understanding drivers of LLM and AI-agent decisions in high-stakes environments. AI safety and technology policy are areas the findings can inform, rather than separate research interests. Systems for LLMs is a minor interest.

## Build and check

```sh
bundle exec jekyll build
python3 scripts/check_site.py
```

The check validates local links, fragments, images, metadata, and the absence of CV/PDF assets in the generated website. All pages render without JavaScript. JavaScript adds theme preference, citation copying, and bookshelf filters.

## Publishing

Hosting stays at `hoffmann-muki.github.io`. GitHub Pages uses **GitHub Actions** under the repository's Settings → Pages. The included workflow builds and checks pull requests and deploys only `main`. The existing `gh-pages` history remains intact.

Old `/#/books` and `/#/projects` links redirect to their new pages. The removed `/#/cv` route is deliberately not retained. GitHub Pages serves `404.html` for missing pages. The source of the previous React site remains in Git history.
