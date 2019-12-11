import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomePage from '../Example/WelcomePage';
import MemberPage from '../../components/MembersComponent'

export default createAppContainer(createSwitchNavigator({
    WelcomePage: WelcomePage,
    MemberPage: MemberPage
}, {
    initialRouteName: 'MemberPage'
}
));
