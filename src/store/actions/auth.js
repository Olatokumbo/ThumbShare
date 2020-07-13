import firebase, {storage} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const startSignup = (credentials) => {
  const name = `${credentials.fName} ${credentials.lName}`;
  let profileUrl = ""
  storage.ref('profile/default.jpg').getDownloadURL().then((url)=>{
    profileUrl = url;
  });
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((authUser) => {
        var user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: name,
                photoURL: profileUrl
            }).then(()=>{
              dispatch({ type: actionTypes.SIGNUP_SUCCESS, uid: authUser.user.uid, displayName: name, photoURL: profileUrl });
            }).catch((err) => {
              console.log(err.message);
              dispatch({ type: actionTypes.SIGNUP_FAILED, error: err.message });
            });
      })
  };
};

export const startSignin = (credentials) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        dispatch({ type: actionTypes.SIGNIN_SUCCESS, uid: data.uid });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.SIGNIN_FAILED, error: err.message });
      });
  };
};

export const startSignout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionTypes.SIGNOUT });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const reset = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET });
  };
};
