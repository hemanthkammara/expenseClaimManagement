import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_AUTH,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actiontype";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  isSignup: false,
  status: "",
  token: "",
  userData: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload.token,
        userData: payload.user,
        isAuth: true,
        isSignup: false,
        status: payload.msg,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        status: payload.msg,
        isSignup: true,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case RESET_AUTH:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: false,
        isSignup: false,
        status: "",
        token: "",
        userData: {},
      };

    default:
      return state;
  }
};
