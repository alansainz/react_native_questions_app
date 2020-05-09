const defaultStartState = {
  array: [],
  fetching: false,
  error: null,
};

export default function questions(state = defaultStartState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_QUESTIONS_ATTEMPT':
      newState.fetching = true;
      break;
    case 'GET_QUESTIONS_SUCCESS':
      newState.fetching = false;
      newState.array = [...state.array, ...action.payload.response];
      break;
    case 'GET_QUESTIONS_FAILURE':
      newState.fetching = false;
      newState.error = action.payload.error;
      break;
    default:
      return state;
  }
  return newState;
}
