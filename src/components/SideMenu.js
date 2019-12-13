
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, ScrollView, Image, TouchableOpacity, SafeAreaView,
    Dimensions
} from 'react-native';
// import styles from '../styles/sideMenuStyles';
import { images, colors, globalStyle } from '../res';

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
    }
    render() {
        const { container, header, sideMenuImage, selectImage, sideMenuHeader, sideMenuTitle, sideSubMenuTitle,
            sideSubMenuPickerTitle } = styles;
        return (
            <View style={container}>
                <View style={header}>
                    <View style={sideMenuImage}>
                        {/* <Image
                            style={selectImage}
                            source={images.sidebar.logo}
                        /> */}
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderRightColor: colors.Black,
        borderRightWidth: 1,
        minHeight: Dimensions.get('window').height,
    },
    header: {
        padding: 10,
        height: 100,
        flexDirection: 'row',
        backgroundColor: colors.Primary,
        borderBottomColor: colors.DrawerShadow,
        borderBottomWidth: 1.5,
        ...globalStyle.centerWrap
    },
    sideMenuImage: {
        flex: 0.3,
    },
    selectImage: {
        height: 80,
        width: 80,
        borderRadius: 90 / 2,
        borderWidth: 4,
        borderColor: colors.White,
    },
    sideMenuHeader: {
        flex: 0.7,
        flexDirection: 'column',
    },
    sideMenuTitle: {
        color: colors.SidebarFontColor,
        fontSize: 22,
        paddingBottom: 3
    },
    sideSubMenuTitle: {
        color: colors.DarkLight,
        fontSize: 14,
    },
    sideSubMenuPickerTitle: {
        color: colors.SidebarFontColor,
        textAlign: 'right',
        paddingRight: 20,
        fontSize: 15,
    },
    sideMenuWrapper: {
        borderBottomColor: colors.Primary,
        borderBottomWidth: 2,
        padding: 12,
        flex: 1,
        flexDirection: 'row',
    },
    sideMenu: {
        paddingLeft: 5,
        color: colors.SidebarFontColor,
        fontSize: 22,
    },
    sideMenuItemIcon: {
        alignSelf: "center",
    }

})
export default sideMenu;