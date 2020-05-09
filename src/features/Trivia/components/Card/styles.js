import styled from 'styled-components';

export const Container = styled.View`
  padding: 12px;
  border-radius: 15px;
  border: 2px solid #0471a6;
  flex-direction: column;
  margin: 20px;
  background-color: #89aae6;
`;

export const QContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;

export const Question = styled.Text`
  font-size: 15px;
  color: #061826;
`;

export const Answers = styled.View`
  flex-direction: column;
  padding: 5px;
`;

export const AnswerButton = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 20px;
  border: 2px solid #0471a6;
`;
