import { combineReducers } from "redux"
import authReducer from "./authReducer"
import employeeFromReducer from "./employeeFormReducer"
import employeeReducer from "./employeeReducer"

export default combineReducers({
  auth: authReducer,
  employeeForm: employeeFromReducer,
  employees: employeeReducer
})