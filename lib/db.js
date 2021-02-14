const loadDb = async () => {
  const firebase = await import("firebase/app");
  await import("firebase/database");

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      });
    }

    return firebase.database().ref("views");
  } catch (error) {
    console.error(error);
  }
};

export default loadDb;
