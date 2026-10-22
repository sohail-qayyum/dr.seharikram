import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Base path follows the Vite base so a GitHub Pages subpath deploy
    // (GITHUB_PAGES_BASE="/<repo-name>/") keeps client-side routing working.
    basepath: import.meta.env.BASE_URL.replace(/\/+$/, "") || "/",
  });

  return router;
};
