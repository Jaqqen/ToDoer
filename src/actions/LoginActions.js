import 'firebase/auth';

import { SET_LOCAL_USER } from 'config/localStorageFile';

import firebase from 'firebase/app';
import history from 'config/history';

export const handleEmailInput = (e) => {
  return {
    type: "EMAIL_INPUT",
    payload: e.target.value,
  }
};

export const handleErrorEmailInput = (e) => {
  return dispatch => {
    dispatch({
      type: "INPUT_ERROR",
      payload: false,
    });
    dispatch({
      type: "EMAIL_INPUT",
      payload: e.target.value,
    });
  }
};

export const handleErrorPasswordInput = (e) => {
  return dispatch => {
    dispatch({
      type: "INPUT_ERROR",
      payload: false,
    });
    dispatch({
      type: "PASSWORD_INPUT",
      payload: e.target.value,
    });
  }
};

export const handlePasswordInput = (e) => {
  return {
    type: "PASSWORD_INPUT",
    payload: e.target.value,
  }
};

export const handleLogin = (email, password) => {
  //returning with a dispatch so that we can conditionally return
  //more dispatchs
  return dispatch => {
    if(email && password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          if(user) {
            //dispatch type: "AUTH_SUCCESS" when user was successfully
            //signed in
            dispatch({
              type: "AUTH_SUCCESS",
              payload: user,
            });

            //save user in sessionStorage for the ongoing session,
            //aka use application without logging in again
            SET_LOCAL_USER(user);

            //leave Login-mask and go to the application
            history.push("/application");
          }
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCodeFirebase = error.code;
          const errorMessageFirebase = error.message;

          dispatch(
            {
              type: "INPUT_ERROR",
              payload: {
                message: "Please check your information again.",
                status: true,
              }
            },
            {
              type: "AUTH_ERROR",
              payload: {
                errorCodeFirebase: errorCodeFirebase,
                errorMessageFirebase: errorMessageFirebase,
              }
            }
          );
        })
    }
    else {
      dispatch({
        type: "INPUT_ERROR",
        payload: {
          message: "Please type in all of your information.",
          status: true,
        }
      });
    }
  }
};
