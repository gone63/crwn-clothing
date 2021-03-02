import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCP6_xi9Id3fVOgrY_RFi2RVJrEptUw_q8",
  authDomain: "crwn-db-ad89f.firebaseapp.com",
  projectId: "crwn-db-ad89f",
  storageBucket: "crwn-db-ad89f.appspot.com",
  messagingSenderId: "33692878947",
  appId: "1:33692878947:web:fc64719db425457afe5056",
  measurementId: "G-FKSFN79SC2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdOn = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdOn,
        ...additionalData,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
