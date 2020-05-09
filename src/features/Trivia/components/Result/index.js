import React from 'react';
import { View } from 'react-native';
import { Text } from './styles.js';

const Result = ({ validAnswers, notValidAnswers }) => (
  <View>
    <Text>Correct answers: {validAnswers}</Text>
    <Text>Incorrect answers: {notValidAnswers}</Text>
  </View>
);

export default Result;
