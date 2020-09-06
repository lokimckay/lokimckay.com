import initDb from "../../lib/db-admin";
import admin from "firebase-admin";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

const incrementViews = async (req, res) => {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: process.env.SENTRY_SAMPLE_RATE || 0,
  });
  const transaction = Sentry.startTransaction({
    op: "increment-views",
    name: "increment-views",
  });

  try {
    initDb();
    const db = admin.database();

    if (!req.query.id) {
      return res.status(400).json({
        error: 'Missing "id" query parameter',
      });
    }

    const ref = db.ref("views").child(req.query.id);
    const { snapshot } = await ref.transaction(currentViews => {
      if (currentViews === null) {
        return 1;
      }
      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    transaction.finish();
  }
};

export default incrementViews;
