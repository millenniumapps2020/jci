import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomePage from '../Example/WelcomePage';
import SplashPage from '../Splash/SplashPage';
import DrawerNavigator from '../../views/Drawer/drawerNavigation'

export default createAppContainer(createSwitchNavigator({
    Drawer: DrawerNavigator,
    Splash: SplashPage,
}, {
    initialRouteName: 'Splash'
}
));
