import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  EMAIL_RESET_SUCCESS,
  EMAIL_RESET_ERROR
} from "./actions/types";

const initState = {
  authError: null,
  resetError: null,
  resetSuccess: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log("login error");
      return {
        ...state,
        authError: action.err.message
      };
    case LOGIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case SIGNOUT_SUCCESS:
      console.log("signout success");
      return {
        state
      };
    case SIGNUP_SUCCESS:
      console.log("Signup Success");
      return {
        ...state,
        authError: null
      };
    case SIGNUP_ERROR:
      console.log("Signup Error");
      return {
        ...state,
        authError: action.err.message
      };
    case EMAIL_RESET_SUCCESS:
      console.log("passowrd reset succesfully");
      return {
        ...state,
        resetSuccess: "Email Reset Succesful"
      };
    case EMAIL_RESET_ERROR:
      console.log("passowrd reset error");
      return {
        ...state,
        resetError: "Reset Error, Please try again"
      };
    default:
      return state;
  }
};

export default authReducer;
