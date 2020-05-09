import { getQuestionsByPage } from '../../../utils/api.js';
import {
  GET_QUESTIONS_ATTEMPT,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
} from './constants';

const getQuestionsAttempt = () => ({
  type: GET_QUESTIONS_ATTEMPT,
});

const getQuestionsSuccess = response => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: {
    response: response.data,
  },
});

const getQuestionsFailure = error => ({
  type: GET_QUESTIONS_FAILURE,
  payload: {
    error,
  },
});

export const getQuestionsRequest = pageNumber => dispatch => {
  dispatch(getQuestionsAttempt());
  return getQuestionsByPage(pageNumber)
    .then(response => dispatch(getQuestionsSuccess(response)))
    .catch(error => dispatch(getQuestionsFailure(error)));
};
