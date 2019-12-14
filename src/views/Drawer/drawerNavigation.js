import react from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
var { width, height } = Dimensions.get('window');
import sideMenu from '../../components/SideMenu'
import ProjectPage from '../../components/Projects'
import WelcomePage from '../Example/WelcomePage'
import MemberPage from '../../components/MembersComponent'

export default createDrawerNavigator({
    WelcomePage: WelcomePage,
    ProjectPage: ProjectPage,
    MemberPage: MemberPage,
}, {
    contentComponent: sideMenu,
    drawerWidth: (width * 0.6),
    defaultNavigationOptions: {
        gesturesEnabled: false,
    }

})

