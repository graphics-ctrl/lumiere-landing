# lumiere-landing

Trial landing page for **The LUMIÈRE**, the WDP Jets Aviation membership.
Plain HTML, CSS and JavaScript. No build step.

> This is a trial build. The page carries a red "Trial build" bar and a `noindex` tag so search engines skip it.

## Branches

| Branch        | What it is for                                   | Who changes it            |
|---------------|--------------------------------------------------|---------------------------|
| `development` | Day-to-day work. All changes land here first.    | Anyone on the project     |
| `main`        | The approved version. Publishes to GitHub Pages. | Only through a pull request from `development` |

The flow is always:

```
your change  ->  development  ->  pull request  ->  review  ->  main  ->  GitHub Pages
```

Never commit straight to `main`.

## Files

```
index.html               The landing page
404.html                 Page shown for a wrong address
assets/css/styles.css    All styles, mobile first
assets/js/main.js        Mobile menu, footer year, trial notice on the enquiry button
assets/img/              Put the official card artwork and logo here
robots.txt               Blocks search engines during the trial
.github/workflows/pages.yml        Publishes main to GitHub Pages
.github/pull_request_template.md   Checklist shown on every pull request
```

## Preview on your computer

Open `index.html` in a browser. That is all.

## Make a change

1. Switch to `development`.
2. Edit the files and save.
3. Commit with a short message, for example `Update Solaire benefits`.
4. Push `development`.
5. On GitHub, open a pull request from `development` into `main`.
6. When it is approved and merged, the site on GitHub Pages updates in about a minute.

## Before launch

- Replace the CSS placeholder cards with the official card artwork in `assets/img/`.
- Connect the "Make a private enquiry" button to the real enquiry form.
- Remove the trial bar, the `noindex` tag, and the `Disallow` line in `robots.txt`.
- Point the custom domain at GitHub Pages, or move hosting to the WDP servers.

Tier figures are taken from https://staging.wdpjets.org/membership (17 Nov 2026) and must be checked before launch.
