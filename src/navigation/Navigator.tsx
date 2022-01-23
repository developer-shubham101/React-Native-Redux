import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/account/Login';
import Dashboard from '../screens/account/Dashboard';
import * as routes from './routes';
import AuthLoading from '../screens/account/AuthLoading';
import BibleBooks from '../screens/readBible/BibleBooks';
import BibleBookChapters from '../screens/readBible/BibleBookChapters';
import BibleBookVerse from '../screens/readBible/BibleBookVerse';

const Stack = createStackNavigator();

const Navigator = () => {
  function PostLogin() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={routes.NAVIGATION_BIBLE_LIST}
          component={BibleBooks}
        />
        <Stack.Screen
          name={routes.NAVIGATION_BIBLE_CHAPTERS}
          component={BibleBookChapters}
        />
        <Stack.Screen
          name={routes.NAVIGATION_BIBLE_VERVES}
          component={BibleBookVerse}
        />

        <Stack.Screen
          name={routes.NAVIGATION_AUTH_LOADING_SWITCH}
          component={AuthLoading}
        />
        <Stack.Screen
          name={routes.NAVIGATION_AUTH_STACK_PATH}
          component={Login}
        />
        <Stack.Screen
          name={routes.NAVIGATION_DASHBOARD}
          component={Dashboard}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <PostLogin />
    </NavigationContainer>
  );
};
export { Navigator };
