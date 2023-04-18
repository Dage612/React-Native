import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../models/navigateModel';
import { useRoute } from '@react-navigation/native';
import InventoryScreen from '../../screens/inventoryScreen/Inventory';
import BillScreen from '../../screens/billScreen/Bill';


const Tab = createBottomTabNavigator<TabParamList>();
const TabBillScreen = () => {
  const { name } = useRoute();
  const currentRoute = name as keyof TabParamList;
  return (
      <Tab.Navigator 
        initialRouteName={currentRoute} 
        screenOptions={{
          headerShown:false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'blue' }
        }}
      >
        <Tab.Screen 
          name="Inventary" 
          component={InventoryScreen} 
          options={{
            title: 'Artículos',
            tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          }}
        />
        <Tab.Screen 
          name="BillScreen" 
          component={BillScreen} 
          options={{
            title: 'Facturar',
            tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          }}
        />
      </Tab.Navigator>
  );
}
export default  TabBillScreen;
