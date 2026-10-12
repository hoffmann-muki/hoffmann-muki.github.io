# Hoffmann Muki

Source for [hoffmann-muki.github.io](https://hoffmann-muki.github.io), built with Jekyll and deployed through GitHub Actions.

## Development

Requires Ruby 4.0 and Bundler.

```sh
bundle install
./bin/dev
```

Preview at http://127.0.0.1:4000. Content lives in the root HTML files and `_data/`; styles and scripts are in `assets/`.

## Validation

```sh
bundle exec jekyll build
python3 scripts/check_site.py
```

Pushes to `main` deploy to GitHub Pages.
