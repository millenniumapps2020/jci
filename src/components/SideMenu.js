
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, ScrollView, Image, TouchableOpacity, SafeAreaView,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/sideMenuStyles';
import { images } from '../../../res/';
var { width, height } = Dimensions.get('window');


var menuData = [
    { name: 'Add Estimation', icon: '', action: 'EstimationPage' },
    { name: 'View Estimation', icon: '', action: 'ViewEstimationPage' },
    { name: 'Exchange Product', icon: '', action: 'ExchangeProduct' },
    { name: 'Sale Product', icon: '', action: 'SalesPage' },
    { name: 'View Sales', icon: '', action: 'ViewSalesPage' },
    { name: 'Logout', icon: '', action: 'LoginPage' },
]
const MenuRow = ({ item, onPress }) => {
    var IconName = item.icon;
    var MenuItemName = item.name;
    const { sideMenuWrapper, sideMenu, sideMenuItemIcon } = styles;
    return (<View style={sideMenuWrapper}>
        <TouchableOpacity style={{ paddingLeft: 6 }} onPress={onPress}>
            <Text style={sideMenu}>{MenuItemName}</Text>
        </TouchableOpacity>
    </View>);
};

class sideMenu extends Component {

    sideMenuAction = (item) => {
        this.props.navigation.closeDrawer();

        if (item.action == "LoginPage") {
            this.props.navigation.navigate('LoginPage')
        } else {
            this.props.navigation.navigate(item.action)
        }
        // alert(JSON.stringify(item))
    }
    render() {
        const { container, header, sideMenuImage, selectImage, sideMenuHeader, sideMenuTitle, sideSubMenuTitle,
            sideSubMenuPickerTitle } = styles;

        return (
            <View style={container}>
                <View style={header}>
                    <View style={sideMenuImage}>
                        <Image
                            style={selectImage}
                            source={images.sidebar.logo}
                        />
                    </View>
                    <View style={sideMenuHeader}>
                        <Text style={sideMenuTitle}>Sumangalee Jewellers</Text>
                        <Text style={sideSubMenuTitle}>{this.props.employeeDetail ? this.props.employeeDetail.user_detail.name : null} |  {this.props.employeeDetail ? this.props.employeeDetail.user_detail.mobile : null}</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {menuData.map((item) => {
                        return <MenuRow item={item} onPress={() => this.sideMenuAction(item)} />
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default sideMenu;