export default function rootReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case "GET_TODOS":
      return { ...state };
    case "TODOS_RECEIVED": {
      return { ...state, todos: action.payload };
    }
    default:
      return state;
  }
}
