import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../../models/navigateModel';
import InventoryScreen from '../../screens/inventoryScreen/Inventory';
import TabBillScreen from '../tab/tabBillNavigate';
import CustomerScreen from '../../screens/customerScreen/customer';
import SettingsScreen from '../../screens/settingsScreen/settings';
import TrasnferScreen from '../../screens/transferScreen/trasnfer';



const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='Facturacion'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0604a3',
        },
        drawerStyle:{
          backgroundColor: 'white',
        }
      }}
    >
      <Drawer.Screen name="Facturacion" component={TabBillScreen} options={{title: 'Facturación'}} />
      <Drawer.Screen name="Articulos" component={InventoryScreen} options={{title: 'Artículos'}} />
      <Drawer.Screen name="Traslados" component={TrasnferScreen} options={{title: 'Traslados'}} />
      <Drawer.Screen name="Clientes" component={CustomerScreen} options={{title: 'Clientes'}} />
      <Drawer.Screen name="Configuracion" component={SettingsScreen} options={{title: 'Configuración'}} />
    </Drawer.Navigator>
  );
  
}



export default DrawerNavigation;