import { getAllQuestions } from '../../../utils/api.js';
import {
  GET_RANDOM_QUESTIONS_ATTEMPT,
  GET_RANDOM_QUESTIONS_SUCCESS,
  GET_RANDOM_QUESTIONS_FAILURE,
  ADD_ANSWER,
} from './constants';

const getRandomQuestionsAttempt = () => ({
  type: GET_RANDOM_QUESTIONS_ATTEMPT,
});

const getRandomQuestionsSuccess = response => ({
  type: GET_RANDOM_QUESTIONS_SUCCESS,
  payload: {
    response: response.data,
  },
});

const getRandomQuestionsFailure = error => ({
  type: GET_RANDOM_QUESTIONS_FAILURE,
  payload: {
    error,
  },
});

const addAnswer = answer => ({
  type: ADD_ANSWER,
  payload: { answer },
});

export const addAnswerToArray = answer => dispatch => {
  return dispatch(addAnswer(answer));
};

export const getRandomQuestionsRequest = () => dispatch => {
  dispatch(getRandomQuestionsAttempt());
  return getAllQuestions()
    .then(response => dispatch(getRandomQuestionsSuccess(response)))
    .catch(error => dispatch(getRandomQuestionsFailure(error)));
};
