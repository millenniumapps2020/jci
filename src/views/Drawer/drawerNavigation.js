import react from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
var { width, height } = Dimensions.get('window');
import sideMenu from '../../components/SideMenu'
import WelcomePage from '../Example/WelcomePage'


export default createDrawerNavigator({
    WelcomePage: WelcomePage,
}, {
    contentComponent: sideMenu,
    drawerWidth: (width * 0.6),
    defaultNavigationOptions: {
        gesturesEnabled: false,
    }

})

