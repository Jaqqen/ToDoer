export default function reducer(
  state={

    email: {
      input: "",
      label: "Email",
    },
    inputError: {
      message: "",
      status: false,
    },
    password: {
      input: "",
      label: "Password",
    },
    userState: {
      errorCodeFirebase: null,
      errorMessageFirebase: null,
    },
  }, action) {

  switch(action.type) {
    default:
      return state;
    case "AUTH_ERROR": {
      return {
        ...state,
        userState: {
          ...state.userState,
          errorCodeFirebase: action.payload.errorCodeFirebase,
          errorMessageFirebase: action.payload.errorMessageFirebase,
        }
      }
    }
    case "AUTH_SUCCESS": {
      return {
        ...state,
        userState: {
          ...state.userState,
          ...action.payload,
        },
      }
    }
    case "EMAIL_INPUT": {
      return {
        ...state,
        email: {
          ...state.email,
          input: action.payload,
        },
      }
    }
    case "INPUT_ERROR": {
      return {
        ...state,
        inputError: {
          ...state.inputError,
          message: action.payload.message,
          status: action.payload.status,
        },
      }
    }
    case "PASSWORD_INPUT": {
      return {
        ...state,
        password: {
          ...state.password,
          input: action.payload,
        },
      }
    }
  }
}
