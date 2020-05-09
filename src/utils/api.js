import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL,
});

export const getQuestionsByPage = pageNumber =>
  api.get(`test?limit=10&page=${pageNumber}`);

export const getAllQuestions = () => api.get('test');
