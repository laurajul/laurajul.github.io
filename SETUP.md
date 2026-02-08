# Local Development Setup

## Prerequisites (Ubuntu/Debian)

Install system dependencies:

```bash
sudo apt install ruby-dev build-essential imagemagick nodejs jupyter-nbconvert
```

## Ruby Gems

Configure Bundler to install gems locally (avoids permission issues):

```bash
bundle config set --local path 'vendor/bundle'
```

Install gems:

```bash
bundle install
```

## Run the Site

```bash
bundle exec jekyll serve
```

The site will be available at http://127.0.0.1:4000/

## Troubleshooting

| Error | Solution |
|-------|----------|
| `Permission denied` writing to `/var/lib/gems/` | Run `bundle config set --local path 'vendor/bundle'` |
| `stringio` or native extension build fails | Install `ruby-dev build-essential` |
| `convert: not found` (ImageMagick) | Install `imagemagick` |
| `No such file or directory - jupyter` | Install `jupyter-nbconvert` |
| `Could not find a JavaScript runtime` | Install `nodejs` |
