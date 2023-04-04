import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../../screens/welcomeScreen/Welcome';
import LoginScreen from '../../screens/loginScreen/login';

export type RootAuthStackParams = {
  Login: {
    name: string;
  };
  Welcome: any;
};

const RootStack = createNativeStackNavigator<RootAuthStackParams>();

const AuthStack = () => {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}></RootStack.Screen>
      <RootStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: true}}></RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default AuthStack;
