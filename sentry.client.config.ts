import * as Sentry from "@sentry/nextjs";
import * as Spotlight from "@spotlightjs/spotlight";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});

if (process.env.NODE_ENV === "development") {
  Spotlight.init();
}
