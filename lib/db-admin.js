const admin = require("firebase-admin");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const init = () => {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: process.env.SENTRY_SAMPLE_RATE || 0,
  });
  const transaction = Sentry.startTransaction({
    op: "db-admin-init",
    name: "db-admin-init",
  });

  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        project_id: "lokimckay-com",
      }),
      databaseURL: "https://lokimckay-com.firebaseio.com",
    });

    return admin.database();
  } catch (error) {
    if (!/already exists/u.test(error.message)) {
      console.error("Firebase admin initialization error", error.stack);
      Sentry.captureException(error);
    }
  } finally {
    transaction.finish();
  }
};

module.exports = init;
