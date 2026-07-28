import * as Sentry from '@sentry/vue'

export function initSentry(app, router) {
  Sentry.init({
    app,
    dsn: process.env.VUE_APP_SENTRY_DSN,
    dataCollection: {
      // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/#dataCollection
      // userInfo: false,
      // httpBodies: []
    },
    integrations: [
      Sentry.browserTracingIntegration({ router }),
      Sentry.replayIntegration()
    ],
    // Tracing
    tracesSampleRate: 1.0,
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    // Logs
    enableLogs: true
  })
}