# Portfolio TODO

Suggested order: 1 → 3 → 2 → 4 → 5. Quick fixes can go in any time.

## 1. Build and deploy

- [x] Compile Tailwind at build time (webpack + PostCSS) instead of loading it from the CDN
- [x] Production `npm run build` (minified, hashed filenames) and `npm run dev` (dev server on port 8080)
- [x] GitHub Actions workflow that deploys `dist/` to Pages ([deploy.yml](./.github/workflows/deploy.yml))
- [x] Stop committing the built `js/script.js`
- [x] In **Settings → Pages**, set **Source** to **GitHub Actions**
- [x] Commit and push to `master` (the live site is a July 2024 build, so this also publishes everything since then)
- [x] Delete the old `deploy` branch once the new deploy is live
- [x] Harden the workflow: move `pages: write` / `id-token: write` to the `deploy` job only, and add `persist-credentials: false` to the checkout step

## 2. Accessibility

Most of this was done as part of the item 4 rewrite.

- [x] Show work details without needing a mouse hover (now always visible)
- [x] Make "Contact" triggers and the contact form's close icon real `<button>`s
- [x] Contact form: Escape closes it, focus moves into it when it opens and returns afterwards (native `<dialog>`)
- [x] Contact form field labels: `<div>` → `<label htmlFor>`
- [x] Add `lang="en"` to `<html>` in [index.html](./index.html)
- [x] Fix logo `alt` text (logos next to a visible name now use `alt=""`, so names aren't read twice)
- [x] Respect the visitor's "reduce motion" setting (entrance animations removed; hover nudges and smooth scrolling use `motion-safe:`)
- [x] The WebSocket project is no longer a fake link; it's a non-clickable card with a muted "Microsoft" label

## 3. Mobile

- [x] Add navigation for small screens (sticky header with a menu button)
- [x] Add a way to open Contact on phones (menu and hero buttons)
- [x] Replace `MobileNav` (it was actually the desktop scroll nav) with [Header.tsx](./src/components/Header.tsx)
- [x] Fix the "intern project" layout on small screens; the overlapping badge is now inline

## 4. Content structure, then styles

- [x] Move experience, education, projects and profiles into [data.ts](./src/data.ts), rendered by shared components in [src/components/](./src/components/)
- [x] Modernize the styles: minimal light look, Inter font, brand green (emerald) in `theme.extend`, AK monogram
- [x] Upgrade React 17 → 19 (`ReactDOM.render` → `createRoot`)
- [x] Remove lodash (its only use was a `throttle` that did nothing)
- [ ] Upgrade to Tailwind v4 (deferred)

## 5. Logging and error reporting

- [x] Remove the remaining debug `console.log` in [index.tsx](./src/index.tsx) (the scroll and hover ones went away with the rewrite)
- [ ] Small logger that's silent in production builds
- [ ] Catch JavaScript errors (a React error boundary + `window.onerror`)
- [ ] Privacy-friendly analytics (GoatCounter, Plausible or Cloudflare Web Analytics) for resume clicks, outbound links and contact submissions
- [ ] Send the contact form in the background with `fetch` and show success/failure inline instead of redirecting to Formspree

## Quick fixes

- [x] Message box placeholder said "Enter email"
- [x] Update the meta description ("learning web frontend and backend")
- [ ] Add Open Graph preview tags so shared links show a title and image
- [ ] Shrink `img/icon.jpg` (488 KB favicon) and `img/mnnit.png` (526 KB, shown at 28 px)
- [x] Delete the unused `.*-demo` CSS rules (their images never existed) and remove `url: false` from [webpack.config.js](./webpack.config.js); `css/style.css` is gone entirely
