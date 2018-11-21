import firebase from "firebase"
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from "./types"
import { Actions } from "react-native-router-flux";

export const employeeUpdate = (prop, value) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
})

export const employeeCreate = (name, phone, shift) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    const employees = firebase.database().ref(`/users/${currentUser.uid}/employees`)
    employees.push({ name, phone, shift }).then(() => Actions.jump("employeeList"))
    dispatch(clearEmployee("", "", ""))
  }
}

export const clearEmployee = () => ({
  type: EMPLOYEE_CREATE,
})

export const employeesFetch = () => (dispatch) => new Promise(
  (resolve) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`).on("value", (snapshot) => {
      dispatch(employeesFetchSuccess(snapshot.val()))
      resolve();
    })
  })


export const employeesFetchSuccess = (value) => ({
  type: EMPLOYEES_FETCH_SUCCESS,
  value
})

export const employeeSave = (name, phone, shift, id) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`)
      .set({ name, phone, shift })
      .then(() => {
        Actions.employeeList({ type: "reset" })
        dispatch(employeeSaveSuccess())
      })
  }
}

export const employeeSaveSuccess = () => ({
  type: EMPLOYEE_SAVE_SUCCESS
})

export const employeeDelete = (id) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`)
      .remove()
      .then(() => Actions.employeeList({ type: "reset" }))
  }
}