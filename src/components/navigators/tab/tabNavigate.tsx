import React from 'react';
import { useNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../models/navigateModel';
import SettingsScreen from '../../screens/settingsScreen/Settings';
import InventaryScreen from '../../screens/inventaryScreen/Inventary';
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator<TabParamList>();
const TabScreen = () => {
  const { name } = useRoute();
  const currentRoute = name as keyof TabParamList;
  
  return (
      <Tab.Navigator initialRouteName={currentRoute} screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name="Inventary" component={InventaryScreen}   options={({ route }) => ({ headerTitle: route.name })}  />
        <Tab.Screen name="Settings" component={SettingsScreen}    options={({ route }) => ({ headerTitle: route.name })} />
      </Tab.Navigator>
  );
}
export default  TabScreen;
