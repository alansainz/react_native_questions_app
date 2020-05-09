import { combineReducers } from 'redux';
import questions from '../features/QuestionDashboard/redux/reducer';
import trivia from '../features/Trivia/redux/reducer.js';

export default combineReducers({
  questions,
  trivia,
});
