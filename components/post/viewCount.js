import { useState, useEffect } from "react";
import format from "comma-number";
import loadDb from "../../lib/db";

const ViewCount = ({ id, increment = false, prefix = "", style }) => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const onViews = newViews => setViews(newViews.val());
    let db;

    const fetchData = async () => {
      db = await loadDb();
      db.child(id).on("value", onViews);
    };

    fetchData();

    return () => {
      if (db) {
        db.child(id).off("value", onViews);
      }
    };
  }, [id]);

  useEffect(() => {
    if (increment) {
      const registerView = () =>
        fetch(`/api/increment-views?id=${encodeURIComponent(id)}`);

      registerView();
    }
  }, [id]);

  return views ? (
    <span className="views" style={style}>
      {prefix}
      {`👁 `}
      <span style={{ fontSize: 14 }}>{format(views)}</span>
    </span>
  ) : null;
};

export default ViewCount;
