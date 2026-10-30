# Portfolio TODO

Suggested order: 1 → 3 → 2 → 4 → 5. Quick fixes can go in any time.

## 1. Build and deploy

- [x] Compile Tailwind at build time (webpack + PostCSS) instead of loading it from the CDN
- [x] Production `npm run build` (minified, hashed filenames) and `npm run dev` (dev server on port 8080)
- [x] GitHub Actions workflow that deploys `dist/` to Pages ([deploy.yml](./.github/workflows/deploy.yml))
- [x] Stop committing the built `js/script.js`
- [x] In **Settings → Pages**, set **Source** to **GitHub Actions**
- [x] Commit and push to `master` (the live site is a July 2024 build, so this also publishes everything since then)
- [ ] Delete the old `deploy` branch once the new deploy is live
- [x] Harden the workflow: move `pages: write` / `id-token: write` to the `deploy` job only, and add `persist-credentials: false` to the checkout step

## 2. Accessibility

- [ ] Show work details in [About.tsx](./src/About.tsx) without needing a mouse hover (a `<button aria-expanded>` toggle, or always visible)
- [ ] Make "Contact Me" ([IntroContainer.tsx](./src/IntroContainer.tsx), [MobileNav.tsx](./src/MobileNav.tsx)) and the contact form's close icon real `<button>`s
- [ ] Contact form: Escape closes it, focus moves into it when it opens and returns afterwards
- [ ] Contact form field labels: `<div>` → `<label htmlFor>`
- [ ] Add `lang="en"` to `<html>` in [index.html](./index.html)
- [ ] Add `alt` text to the GitHub icons in [Projects.tsx](./src/Projects.tsx)
- [ ] Fix the AHPS logo's `alt="MNNIT"` in [About.tsx](./src/About.tsx)
- [ ] Turn off animations when the visitor's "reduce motion" setting is on
- [ ] In-progress project links (`href="#" target="_blank"`) → buttons, or remove the link

## 3. Mobile

- [ ] Add navigation for small screens (both navs are `hidden md:block`)
- [ ] Add a way to open Contact Me on phones (it only opens via a `#contact` URL today)
- [ ] Rename `MobileNav`; it's actually the desktop scroll nav
- [ ] Fix the "intern project" layout on small screens (noted in [info.txt](./info.txt))

## 4. Content structure, then styles

- [ ] Move experience, projects and links into data lists rendered by one shared card component (removes the duplicated cards in [About.tsx](./src/About.tsx) and [Links.tsx](./src/Links.tsx))
- [ ] Then modernize the styles (consider Tailwind v4; put the brand green `#35D399` in `theme.extend`)
- [ ] Upgrade React 17 → 18/19 (`ReactDOM.render` → `createRoot`)
- [ ] Replace lodash, which is only used for `throttle` and is about a quarter of the JS bundle

## 5. Logging and error reporting

- [ ] Remove debug `console.log`s ([App.tsx](./src/App.tsx) scroll handler, [About.tsx](./src/About.tsx) hover, [index.tsx](./src/index.tsx))
- [ ] Throttle the scroll handler, or use `IntersectionObserver`; `throttle` currently wraps the one-time URL check instead
- [ ] Small logger that's silent in production builds
- [ ] Catch JavaScript errors (a React error boundary + `window.onerror`)
- [ ] Privacy-friendly analytics (GoatCounter, Plausible or Cloudflare Web Analytics) for resume clicks, outbound links and contact submissions
- [ ] Send the contact form in the background with `fetch` and show success/failure inline instead of redirecting to Formspree

## Quick fixes

- [ ] Message box placeholder says "Enter email" ([MobileNav.tsx](./src/MobileNav.tsx))
- [ ] Update the meta description ("learning web frontend and backend") and add Open Graph preview tags
- [ ] Shrink `img/icon.jpg` (488 KB favicon) and `img/mnnit.png` (526 KB)
- [ ] Delete the unused `.*-demo` rules in [style.css](./css/style.css) (their images never existed), then remove `url: false` from [webpack.config.js](./webpack.config.js)
