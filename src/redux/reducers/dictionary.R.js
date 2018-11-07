export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_DEFINITION":
      return Object.assign(...state, action.payload);
    default:
      return state;
  }
}