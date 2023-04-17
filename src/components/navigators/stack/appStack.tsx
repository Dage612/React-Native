import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../models/navigateModel';
import SettingsScreen from '../../screens/settingsScreen/Settings';
import InventaryScreen from '../../screens/inventoryScreen/Inventory';




const Stack = createBottomTabNavigator<TabParamList>();

const AllScreen = () => {
  return (
      <Stack.Navigator initialRouteName='Inventary' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Inventary" component={InventaryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
  );
}
export default  AllScreen;

