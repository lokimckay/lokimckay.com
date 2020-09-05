export default async () => {
  const firebase = await import("firebase/app");
  await import("firebase/database");

  try {
    firebase.initializeApp({
      databaseURL: "https://lokimckay-com.firebaseio.com",
    });
  } catch (error) {
    if (!/already exists/u.test(error.message)) {
      console.error("Firebase initialization error", error.stack);
    }
  }

  return firebase.database().ref("views");
};
