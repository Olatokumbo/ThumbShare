import * as actionTypes from "../actions/actionTypes";
const initialState = {
  authError: null,
  uid: null,
  displayName: null,
  photoURL: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        authError: null,
        uid: action.uid,
        displayName: action.displayName,
        photoURL: action.photoURL,
      };
    case actionTypes.SIGNIN_FAILED:
      return {
        ...state,
        authError: action.error,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
        uid: action.uid,
        displayName: action.displayName,
        photoURL: action.photoURL,
      };
    case actionTypes.SIGNUP_FAILED:
      return {
        ...state,
        authError: action.error,
      };
    case actionTypes.SIGNOUT:
      return {
        ...state,
        uid: null,
      };
    case actionTypes.UPDATE_PROFILE_PHOTO:
      return {
        ...state,
        photoURL: action.photoURL,
      };
    case actionTypes.RESET:
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
