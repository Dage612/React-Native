import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../models/navigateModel';
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import InventoryScreen from '../../screens/inventoryScreen/Inventory';
import BillScreen from '../../screens/billScreen/bill';
import BillInitScreen from '../../screens/billScreen/biilInitScreen/billInit';




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
          name="BillInitScreen" 
          component={BillInitScreen} 
          options={{
            title: 'Facturar',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={size} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          }}
        />
        <Tab.Screen 
          name="BillScreen" 
          component={BillScreen} 
          options={{
            title: 'Carrito',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cash" size={size} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          }}
        />
      </Tab.Navigator>
  );
}
export default  TabBillScreen;
