import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../models/navigateModel';
import SettingsScreen from '../../screens/settingsScreen/Settings';
import AllScreen from '../stack/appStack';
import WelcomeScreen from '../../screens/welcomeScreen/Welcome';



const Tab = createBottomTabNavigator<TabParamList>();

const TabScreen = () => {
  return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}
export default  TabScreen;
