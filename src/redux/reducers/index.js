const initState = {
  total: 1000,
};

function rootReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TOTAL":
      return Object.assign({}, state, {
        total: state.total + action.value,
      });
    case "SUBTRACT_TOTAL":
      return Object.assign({}, state, {
        total: state.total - action.value,
      });

    default:
      return state;
  }
}

export default rootReducer;
