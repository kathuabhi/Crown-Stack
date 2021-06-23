import React, { ReactNode, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import MainNavigator from './navigation/navigationStack';
import SplashScreen from 'react-native-splash-screen'
import AppStyles from './config/styles';

const Entrypoint: () => ReactNode = () => {
  useEffect(() => {
    const splashInterval = setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  })

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={AppStyles.colors.COLOR_PRIMARY}
        barStyle="light-content"
      />
      <MainNavigator />
    </NavigationContainer>
  );

}
export default Entrypoint;


