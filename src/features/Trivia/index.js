import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  getRandomQuestionsRequest,
  addAnswerToArray,
  resetAnswersArrays,
} from './redux/actions.js';
import { Button } from './styles.js';
import Card from './components/Card';
import Result from './components/Result';

const ResultScreen = 'Result';

const Stack = createStackNavigator();

const Trivia = () => {
  const trivia = useSelector(state => state.trivia);
  const dispatch = useDispatch();
  const { randomQuestions, fetching, validAnswers, notValidAnswers } = trivia;

  const selectAnswerAndAdvance = (isAnswerTrue, props) => {
    const nextQuestion = (Number(props.route.name) + 1).toString();

    dispatch(addAnswerToArray(isAnswerTrue));

    if (nextQuestion > randomQuestions.length) {
      props.navigation.push(ResultScreen);
    } else {
      props.navigation.push(nextQuestion);
    }
  };

  const restartQuestions = props => {
    dispatch(getRandomQuestionsRequest());
    dispatch(resetAnswersArrays());
    props.navigation.push('1');
  };

  useEffect(() => {
    dispatch(getRandomQuestionsRequest());
  }, [dispatch]);

  if (fetching || !randomQuestions.length) {
    return <ActivityIndicator size="large" color="#AC80A0" />;
  }
  return (
    <Stack.Navigator>
      {randomQuestions.map((question, index) => (
        <Stack.Screen key={index} name={(index + 1).toString()}>
          {props => (
            <Card
              question={question.question}
              answers={question.answers}
              onPress={isTrue => selectAnswerAndAdvance(isTrue, props)}
            />
          )}
        </Stack.Screen>
      ))}
      <Stack.Screen name={ResultScreen}>
        {props => {
          return (
            <View>
              <Result
                validAnswers={validAnswers.length}
                notValidAnswers={notValidAnswers.length}
              />
              <Button onPress={() => restartQuestions(props)}>
                <Text>Answer more questions</Text>
              </Button>
            </View>
          );
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Trivia;
