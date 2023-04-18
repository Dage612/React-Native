import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList, TabParamList } from '../../models/navigateModel';
import InventoryScreen from '../../screens/inventoryScreen/Inventory';
import SettingsScreen from '../../screens/settingsScreen/Settings';
import TabBillScreen from '../tab/tabBillNavigate';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='Facturacion'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue',
        },
      }}
    >
      <Drawer.Screen name="Facturacion" component={TabBillScreen} options={{title: 'Facturación'}} />
      <Drawer.Screen name="Articulos" component={InventoryScreen} options={{title: 'Artículos'}} />
      <Drawer.Screen name="Configuracion" component={SettingsScreen} options={{title: 'Configuración'}} />
    </Drawer.Navigator>
  );
  
}



export default DrawerNavigation;