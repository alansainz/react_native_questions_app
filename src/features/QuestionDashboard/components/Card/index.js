import React from 'react';
import {
  Container,
  NumberContainer,
  QNumber,
  QContainer,
  Question,
  AContainer,
  Answer,
} from './styles.js';

const Card = ({ number, question, answer }) => (
  <Container>
    <NumberContainer>
      <QNumber>{number}</QNumber>
    </NumberContainer>
    <QContainer>
      <Question>{question}</Question>
    </QContainer>
    <AContainer>
      <Answer>{answer}</Answer>
    </AContainer>
  </Container>
);

export default Card;
