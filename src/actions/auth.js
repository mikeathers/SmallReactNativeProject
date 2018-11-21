import firebase from "firebase"
import { Actions } from "react-native-router-flux"
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_START } from "./types"

export const emailChanged = (email) => ({
  type: EMAIL_CHANGED,
  email
})

export const passwordChanged = (password) => ({
  type: PASSWORD_CHANGED,
  password
})

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch(loginUserStart())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(loginUserSuccess(user))
        Actions.jump("main")
      })
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => dispatch(loginUserSuccess(user)))
        .catch(() => dispatch(loginUserFail("Authentication Failed."))))
  }
}

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user
})

export const loginUserFail = (error) => ({
  type: LOGIN_USER_FAIL,
  error
})

export const loginUserStart = () => ({
  type: LOGIN_USER_START,
  loading: true
})