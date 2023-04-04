import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabParamList } from '../../models/navigateModel';
import WelcomeScreen from '../../screens/welcomeScreen/Welcome';
import SettingsScreen from '../../screens/settingsScreen/Settings';

const Drawer = createDrawerNavigator<TabParamList>();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={WelcomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
  );
}
export default DrawerNavigation;
