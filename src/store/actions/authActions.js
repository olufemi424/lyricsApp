import {
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  EMAIL_RESET_SUCCESS,
  EMAIL_RESET_ERROR,
  LOGIN_ERROR
} from "./types";

export const signIn = data => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lasttName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: SIGNUP_ERROR, err });
      });
  };
};

export const resetPassword = (data, history) => {
  return (dispatch, getState, { getFirebase }) => {
    console.log("got here trying");

    const firebase = getFirebase();
    firebase
      .auth()
      .sendPasswordResetEmail(data.email)
      .then(() => {
        console.log("got here success");
        dispatch({ type: EMAIL_RESET_SUCCESS });
        history.push("/login");
      })
      .catch(err => {
        console.log("got here fail");
        dispatch({ type: EMAIL_RESET_ERROR, err });
      });
  };
};
