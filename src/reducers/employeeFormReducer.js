import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS } from "../actions/types"

const defaultState = {
  name: "",
  phone: "",
  shift: "",
  employees: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case EMPLOYEE_CREATE:
      return defaultState
    case EMPLOYEE_SAVE_SUCCESS:
      return defaultState
    default:
      return state;
  }
}