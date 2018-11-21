import { EMPLOYEES_FETCH_SUCCESS } from "../actions/types"

const defaultState = {}

export default (state = defaultState, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.value;
    default:
      return state;
  }
}