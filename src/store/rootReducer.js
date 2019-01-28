import authReducer from "./authReducer";
import trackReducer from "./trackReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  tracks: trackReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
