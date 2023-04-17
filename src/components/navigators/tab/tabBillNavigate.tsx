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
      <Tab.Navigator initialRouteName={currentRoute} screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name="Inventary" component={InventoryScreen} options={{title: 'Artículos'}}/>
        <Tab.Screen name="BillScreen" component={BillScreen} options={{title: 'Facturar'}}/>
      </Tab.Navigator>
  );
}
export default  TabBillScreen;
