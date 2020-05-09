import React from 'react';
import { Text } from 'react-native';
import { Button } from './styles.js';

const AnswerButton = ({ answer, onPress }) => (
  <Button onPress={onPress}>
    <Text>{answer}</Text>
  </Button>
);

export default AnswerButton;
