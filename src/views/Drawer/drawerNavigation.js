import react from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
var { width, height } = Dimensions.get('window');
import sideMenu from '../../components/SideMenu'
import PermanentProjectPage from '../PermanentProjects/PermanentProjectsPage'
import ProjectPage from '../Projects/Projects'
import WelcomePage from '../Example/WelcomePage'
import MemberPage from '../Members/MembersPage'
import DashboardPage from '../Dashboard/DashboardPage'
import AboutPage from '../About/AboutPage'
import ContactPage from '../Contact/ContactPage'

export default createDrawerNavigator({
    DashboardPage: DashboardPage,
    WelcomePage: WelcomePage,
    PermanentProjectPage: PermanentProjectPage,
    ProjectPage: ProjectPage,
    MemberPage: MemberPage,
    AboutPage: AboutPage,
    ContactPage: ContactPage
}, {
    contentComponent: sideMenu,
    drawerWidth: (width * 0.8),
    defaultNavigationOptions: {
        gesturesEnabled: false,
    }

})

