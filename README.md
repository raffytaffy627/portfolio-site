# portfolio-site

Personal portfolio for Rafin Hasan — plain HTML/CSS/JS, no framework, no build step.

## Preview locally

Just open [index.html](index.html) in a browser, or serve it so relative paths behave exactly like production:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Go live with GitHub Pages (no domain needed yet)

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. On GitHub, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
5. Wait 1-2 minutes. Your site will be live at:
   `https://raffytaffy627.github.io/portfolio-site/`

That's it — no domain required for this step.

## Adding a custom domain later

This repo already includes a [CNAME](CNAME) file set to a placeholder domain, `rafinhasan.com`. When you actually buy a domain, swap that file's contents to match it (see below).

### 1. Buy a domain

1. Pick a registrar (e.g. Namecheap, Google Domains successor Squarespace Domains, Cloudflare Registrar, GoDaddy).
2. Search for your domain (e.g. `rafinhasan.com`) and purchase it.
3. Skip any "website builder" or hosting upsells — you only need DNS control, which every registrar provides by default.

### 2. Point DNS at GitHub Pages

In your registrar's DNS management panel, add these records:

**A records** (apex domain, e.g. `rafinhasan.com`) — point to all four GitHub Pages IPs:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME record** (www subdomain):

| Type | Host | Value |
|------|------|-------|
| CNAME | www | raffytaffy627.github.io |

Some registrars use `@` for the root/apex domain, others want it blank — use whatever your registrar's UI calls "root" or "apex."

### 3. Update the CNAME file in this repo

Edit [CNAME](CNAME) so it contains just your real domain, e.g.:

```
rafinhasan.com
```

Commit and push. GitHub Pages reads this file to know which custom domain to serve.

### 4. Set the domain in GitHub

1. Go to **Settings > Pages**.
2. Under **Custom domain**, enter your domain (e.g. `rafinhasan.com`) and **Save**. GitHub will verify the DNS records automatically.
3. Once verified, check **Enforce HTTPS** — GitHub provisions a free TLS certificate for you.

### 5. Wait for propagation

DNS changes usually take **10 minutes to a few hours**, but can take up to **24-48 hours** in rare cases depending on your registrar and previous DNS caching. If the domain doesn't resolve right away, that's normal — just wait and try again.

## Structure

```
index.html    - page content
styles.css    - all styling (black/red theme)
script.js     - scroll-reveal animation for project cards
CNAME         - custom domain for GitHub Pages
```
