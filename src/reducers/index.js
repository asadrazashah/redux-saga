export default function rootReducer(state = {}, action) {
  switch (action.actionTypes) {
    case "GET_TODOS":
      return { ...state };
    case "TODOS_RECEIVED":
      return { ...state, todos: action.res };
    default:
      return state;
  }
}
