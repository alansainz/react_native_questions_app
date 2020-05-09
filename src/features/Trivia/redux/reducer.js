import { getRandom } from '../../../utils/functions';
import { NUMBER_OF_QUESTIONS } from '../../../utils/config';

const defaultStartState = {
  randomQuestions: [],
  fetching: false,
  error: null,
  validAnswers: [],
};

export default function trivia(state = defaultStartState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_RANDOM_QUESTIONS_ATTEMPT':
      newState.fetching = true;
      break;
    case 'GET_RANDOM_QUESTIONS_SUCCESS':
      const randomQuestions = getRandom(
        action.payload.response,
        NUMBER_OF_QUESTIONS,
      );
      newState.fetching = false;
      newState.randomQuestions = randomQuestions;
      break;
    case 'GET_RANDOM_QUESTIONS_FAILURE':
      newState.fetching = false;
      newState.error = action.payload.error;
      break;
    case 'ADD_ANSWER':
      const isTrue = action.payload.answer;
      newState.validAnswers = isTrue
        ? [...state.validAnswers, action.payload.answer]
        : [...state.validAnswers];
      break;
    default:
      return state;
  }
  return newState;
}
