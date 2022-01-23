import React, { useContext, useEffect } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Spinner } from '../../components/common';
import {
  NAVIGATION_DASHBOARD,
  NAVIGATION_AUTH_STACK_PATH,
} from '../../navigation/routes';
import { logError } from '../../helper/logger';
import { ThemeContext } from '../../theme';
import { USER_TOKEN_KEY, USER_DETAILS_KEY } from '../../helper/constants';

const AuthLoading = (props) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const customerToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
      const customerDetails = await AsyncStorage.getItem(USER_DETAILS_KEY);
      // const isWalkthrougn = await AsyncStorage.getItem(IS_WALKTHROUGH_FINISH);
      console.log('customerToken', customerToken);
      // console.log("isWalkthrougn", isWalkthrougn);
      // appOperation.setCustomerToken(customerToken);

      props.navigation.navigate(
        customerToken ? NAVIGATION_DASHBOARD : NAVIGATION_AUTH_STACK_PATH,
      );
    } catch (e) {
      logError(e);
      // TODO: add error screen via switch navigation
    }
  };

  return (
    <View style={styles.container(theme)}>
      <Spinner />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.background,
  }),
});

export default AuthLoading;
