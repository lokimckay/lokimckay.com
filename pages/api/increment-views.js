import { getDb } from "../../lib/firebase/admin";

const incrementViews = async (req, res) => {
  try {
    if (process.env.DEBUG_MODE)
      return res
        .status(403)
        .json({ error: "Can't increment views in debug environment" });

    if (!req.query.id)
      return res.status(400).json({
        error: 'Missing "id" query parameter',
      });

    const db = getDb();
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
    console.error("[Increment Views]", error);
  }
};

export default incrementViews;
