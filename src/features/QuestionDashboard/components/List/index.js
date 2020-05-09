import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import { getQuestionsRequest } from '../../redux/actions.js';
import { Container } from './styles.js';
import { MAX_QUESTIONS_PAGES } from '../../../../utils/config';
import { returnTrueAnswer } from '../../../../utils/functions';

const flatListStyle = { alignItems: 'center' };

const List = props => {
  const questions = useSelector(state => state.questions);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  const getQuestionsByPageNumber = () => {
    const maxPageNumberReached = pageNumber === MAX_QUESTIONS_PAGES;

    if (maxPageNumberReached) {
      return;
    }
    setPageNumber(pageNumber + 1);
    pageNumber && dispatch(getQuestionsRequest(pageNumber));
  };

  useEffect(() => {
    dispatch(getQuestionsRequest(1));
    setPageNumber(2);
  }, [dispatch]);

  const { array, fetching } = questions;
  return (
    <Container>
      <FlatList
        contentContainerStyle={flatListStyle}
        data={array}
        keyExtractor={item => item.number.toString()}
        renderItem={({ item }) => (
          <Card
            number={item.number}
            question={item.question}
            answer={returnTrueAnswer(item.answers)}
          />
        )}
        onEndReached={getQuestionsByPageNumber}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />

      {fetching && <ActivityIndicator size="large" color="#AC80A0" />}
    </Container>
  );
};

export default List;
