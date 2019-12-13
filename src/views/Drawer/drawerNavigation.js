import react from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
var { width, height } = Dimensions.get('window');
import sideMenu from '../../components/SideMenu'
import WelcomePage from '../Example/WelcomePage'
import DashboardPage from '../Dashboard/DashboardPage'

export default createDrawerNavigator({
    Dashboard: DashboardPage,
    WelcomePage: WelcomePage,
}, {
    contentComponent: sideMenu,
    drawerWidth: (width * 0.8),
    defaultNavigationOptions: {
        gesturesEnabled: false,
    }

})

