// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Pre-render every route to static HTML at build time. This makes the site
    // deployable to fully static hosting (e.g. GitHub Pages): each page gets its
    // own index.html, so refreshing a deep link never 404s.
    pages: [{ path: "/" }, { path: "/monograph" }, { path: "/portfolio" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  vite: {
    // Asset base path. Keep "/" for Lovable hosting; for a GitHub Pages project
    // subpath build with: GITHUB_PAGES_BASE="/<repo-name>/" npm run build
    base: process.env.GITHUB_PAGES_BASE || "/",
  },
});
