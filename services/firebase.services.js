import Firebase from "../config/firebaseConfig";

export const getAdsData = (userId) =>
  Firebase.database().ref(`usuarios/${userId}/anuncios`);
