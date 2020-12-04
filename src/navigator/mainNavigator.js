import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps182085Navigator from '../features/Maps182085/navigator';
import Additem182084Navigator from '../features/Additem182084/navigator';
import Maps182080Navigator from '../features/Maps182080/navigator';
import UserProfile182076Navigator from '../features/UserProfile182076/navigator';
import BlankScreen1182053Navigator from '../features/BlankScreen1182053/navigator';
import BlankScreen0182052Navigator from '../features/BlankScreen0182052/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps182085: { screen: Maps182085Navigator },
Additem182084: { screen: Additem182084Navigator },
Maps182080: { screen: Maps182080Navigator },
UserProfile182076: { screen: UserProfile182076Navigator },
BlankScreen1182053: { screen: BlankScreen1182053Navigator },
BlankScreen0182052: { screen: BlankScreen0182052Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
