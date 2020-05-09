import React from 'react';
import { Container, QContainer, Question, Answers } from './styles.js';
import AnswerButton from '../AnswerButton';

const Card = ({ number, question, answers, onPress }) => (
  <Container>
    <QContainer>
      <Question>{question}</Question>
    </QContainer>
    <Answers>
      {answers &&
        answers.map((answer, index) => (
          <AnswerButton
            answer={answer.answer}
            key={index}
            onPress={() => onPress(answer.isCorrect)}
          />
        ))}
    </Answers>
  </Container>
);

export default Card;
