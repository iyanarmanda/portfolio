import type { AstroIntegration } from 'astro';

interface DevRoute {
  pattern: string;
  entrypoint: string;
}

export default function devRoutes(routes: DevRoute[]): AstroIntegration {
  return {
    name: 'dev-only-routes',
    hooks: {
      'astro:config:setup': ({ injectRoute, command }) => {
        if (command !== 'dev') return;

        routes.forEach((route) => {
          injectRoute({
            pattern: route.pattern,
            entrypoint: route.entrypoint,
          });
          console.log(`Dev route injected: ${route.pattern}`);
        });
      },
    },
  };
}
