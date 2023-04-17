import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/loginScreen/login';
import InventaryScreen from '../../screens/inventoryScreen/Inventory';

export type RootAuthStackParams = {
  Login: {
    name: string;
  };
};

const RootStack = createNativeStackNavigator<RootAuthStackParams>();

const AuthStack = () => {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}></RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default AuthStack;
