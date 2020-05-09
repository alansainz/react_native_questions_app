/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from './styles.js';
import Trivia from './src/features/Trivia';
import QuestionDashboard from './src/features/QuestionDashboard';
import store from './src/redux/store';

const Tab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Container>
            <Tab.Navigator>
              <Tab.Screen
                name="QuestionDashboard"
                component={QuestionDashboard}
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Trivia"
                component={Trivia}
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="quora"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </Container>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
