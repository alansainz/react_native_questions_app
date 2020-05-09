/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';

import Trivia from './src/features/Trivia';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{ height: '100%', backgroundColor: '#3685b5' }}>
            <Trivia />
          </View>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
