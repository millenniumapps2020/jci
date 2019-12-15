import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors, images, fonts } from '../res';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerWrap}>
                    <SafeAreaView>
                        <View style={styles.mainHeaderWrap}>
                            <TouchableOpacity onPress={() => this.props.leftPressed()}>
                                <Image
                                    source={
                                        (this.props.title === "Project Details" || this.props.title == "Permanent Project Details") ? images.icons.Back_icon
                                            : images.icons.menu}
                                    style={styles.menuIcon}
                                />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>{this.props.title}</Text>
                            <Image source={images.icons.menu} style={styles.logoIcon} />
                        </View>
                        {this.props.subTitle ?
                            <View style={styles.subHeaderWrap}>
                                <Text style={styles.headerSubTitle}>{this.props.subTitle}</Text>
                            </View> : null}
                    </SafeAreaView>

                </View>

            </View>
        );
    }
}

export default Header;


const styles = StyleSheet.create({
    header: {
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
        fontSize: 24,
        color: colors.primaryTextColor,
        fontFamily: fonts.SemiBold
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