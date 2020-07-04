import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings74246Navigator from '../features/Settings74246/navigator';
import UserProfile74239Navigator from '../features/UserProfile74239/navigator';
import Settings74238Navigator from '../features/Settings74238/navigator';
import Settings74236Navigator from '../features/Settings74236/navigator';
import SignIn274234Navigator from '../features/SignIn274234/navigator';
import Settings74232Navigator from '../features/Settings74232/navigator';
import UserProfile74225Navigator from '../features/UserProfile74225/navigator';
import Settings74224Navigator from '../features/Settings74224/navigator';
import Settings74222Navigator from '../features/Settings74222/navigator';
import SignIn274220Navigator from '../features/SignIn274220/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings74246: { screen: Settings74246Navigator },
UserProfile74239: { screen: UserProfile74239Navigator },
Settings74238: { screen: Settings74238Navigator },
Settings74236: { screen: Settings74236Navigator },
SignIn274234: { screen: SignIn274234Navigator },
Settings74232: { screen: Settings74232Navigator },
UserProfile74225: { screen: UserProfile74225Navigator },
Settings74224: { screen: Settings74224Navigator },
Settings74222: { screen: Settings74222Navigator },
SignIn274220: { screen: SignIn274220Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
