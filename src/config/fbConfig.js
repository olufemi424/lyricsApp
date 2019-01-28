import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD7ttYVfXdSTHb3Qy5rt_rX0TyAz6NZ4YQ",
  authDomain: "lyricsfinder-2a899.firebaseapp.com",
  databaseURL: "https://lyricsfinder-2a899.firebaseio.com",
  projectId: "lyricsfinder-2a899",
  storageBucket: "lyricsfinder-2a899.appspot.com",
  messagingSenderId: "600757316594"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
