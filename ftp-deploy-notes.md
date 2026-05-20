# FTP Auto-Deploy Notes

The workflow `.github/workflows/deploy.yml` automatically deploys the built site
to FTP after every push to `main`, in addition to GitHub Pages.

## How it works

After Jekyll builds the site into `_site/`, two FTP deploy steps upload the
contents to the web hosting:

- `lwgnr.de` → remote path `/lwgnr/`
- `sparebrain.eu` → remote path `/sparebrain.eu/`

The action (`SamKirkland/FTP-Deploy-Action`) only uploads changed files by
storing a sync state file (`.ftp-deploy-sync-state.json`) on the server.

## Required GitHub Secrets

Set under **repo → Settings → Secrets and variables → Actions**:

| Secret name    | Description            |
| -------------- | ---------------------- |
| `FTP_SERVER`   | FTP hostname           |
| `FTP_USERNAME` | FTP username           |
| `FTP_PASSWORD` | FTP password           |

## How to remove FTP deployment

Remove these two steps from `.github/workflows/deploy.yml`:

```yaml
- name: Deploy to FTP (lwgnr.de) 📡
  if: github.event_name != 'pull_request'
  uses: SamKirkland/FTP-Deploy-Action@v4.3.5
  with:
    server: ${{ secrets.FTP_SERVER }}
    username: ${{ secrets.FTP_USERNAME }}
    password: ${{ secrets.FTP_PASSWORD }}
    local-dir: ./_site/
    server-dir: /lwgnr/
- name: Deploy to FTP (sparebrain.eu) 📡
  if: github.event_name != 'pull_request'
  uses: SamKirkland/FTP-Deploy-Action@v4.3.5
  with:
    server: ${{ secrets.FTP_SERVER }}
    username: ${{ secrets.FTP_USERNAME }}
    password: ${{ secrets.FTP_PASSWORD }}
    local-dir: ./_site/
    server-dir: /sparebrain.eu/
```

You can also delete the three FTP secrets from GitHub if no longer needed.
