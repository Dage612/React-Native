import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../models/navigateModel';
import WelcomeScreen from '../../screens/welcomeScreen/Welcome';
import SettingsScreen from '../../screens/settingsScreen/Settings';




const Stack = createBottomTabNavigator<TabParamList>();

const AllScreen = () => {
  return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={SettingsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
  );
}
export default  AllScreen;

