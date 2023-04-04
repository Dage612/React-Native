import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../models/navigateModel';
import WelcomeScreen from '../../screens/welcomeScreen/Welcome';
import SettingsScreen from '../../screens/settingsScreen/Settings';



const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}
export default  TabNavigation;
