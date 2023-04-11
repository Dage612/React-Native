import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabParamList } from '../../models/navigateModel';
import TabScreen from '../tab/tabNavigate';


const Drawer = createDrawerNavigator<TabParamList>();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator initialRouteName='TabScreen'>
        <Drawer.Screen name="Inventary" component={TabScreen} />
        <Drawer.Screen name="Settings" component={TabScreen} />
        <Drawer.Screen name="TabScreen" component={TabScreen} />
      </Drawer.Navigator>
  );
}

export default DrawerNavigation;
