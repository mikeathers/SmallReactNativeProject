import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_START } from "../actions/types"

const defaultState = {
  email: "",
  password: "",
  user: "",
  error: "",
  loading: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.email
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.password
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...defaultState,
        user: action.user,
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case LOGIN_USER_START:
      return {
        ...state,
        loading: action.loading,
        error: ""
      }
    default:
      return state;
  }
}