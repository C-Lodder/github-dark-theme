# GDT (GitHub Dark Theme)

GDT is a browser extension providing a dark theme for GitHub.

Unlike other solutions out there that inject a 1.3MB CSS file, GDT primarily utilises GitHub's CSS variables, resulting in a clean, small CSS file that won't effect the performance of your GitHub experience.

## Download browser extension

![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)
--- | --- | --- | --- | --- |
[Download](https://addons.mozilla.org/en-GB/firefox/addon/gdt/) | Coming soon | Coming soon | Coming soon | Coming soon |

## Building locally
You will need [NodeJS](https://nodejs.org) for any local development

- Install dependencies:
```bash
npm ci
```
- Minify CSS:
```bash
node build.js
```

## Screenshot
![Screeny](https://i.imgur.com/BOI3FB1.png)
