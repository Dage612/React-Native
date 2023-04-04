import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabParamList } from '../../models/navigateModel';
import WelcomeScreen from '../../screens/welcomeScreen/Welcome';
import SettingsScreen from '../../screens/settingsScreen/Settings';
import TabScreen from '../tab/tabNavigate';
import AllScreen from '../stack/appStack';

const Drawer = createDrawerNavigator<TabParamList>();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator initialRouteName='TabScreen'>
        <Drawer.Screen name="Home" component={WelcomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="TabScreen" component={TabScreen} />
      </Drawer.Navigator>
  );
}
export default DrawerNavigation;
