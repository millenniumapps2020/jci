import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { colors, images } from '../res';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerWrap}>
                    <View style={styles.mainHeaderWrap}>
                        <TouchableOpacity onPress={() => this.props.leftPressed()}>
                            <Image source={images.icons.menu} style={styles.menuIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>{this.props.title}</Text>
                        <Image source={images.icons.menu} style={styles.logoIcon} />
                    </View>
                    <View style={styles.subHeaderWrap}>
                        <Text style={styles.headerSubTitle}>{this.props.subTitle}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Header;


const styles = StyleSheet.create({
    header:{
        backgroundColor: colors.primaryBackgroundColor,
    },
    headerWrap: {
        minHeight: 55,
        backgroundColor: colors.primaryColor,
        padding: 15,
        paddingBottom: 5,
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15
    },
    mainHeaderWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subHeaderWrap: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    headerTitle: {
        fontSize: 22,
        color: colors.primaryTextColor,
        fontWeight: '600'
    },
    headerSubTitle: {
        fontSize: 12,
        color: colors.primaryTextColor
    },
    logoIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})