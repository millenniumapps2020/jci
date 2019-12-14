import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { images, colors, globalStyle, fonts } from '../../res/';

import Header from '../../components/Header'
import CardView from '../../components/CardView'

class ContactPage extends Component {
    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"Contact us"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    <CardView>
                       
                    </CardView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    eventTitleText: {
        fontSize: 15,
        color: colors.headingColor,
        fontWeight:'600',
        fontFamily:fonts.SemiBold
    },
})
export default (ContactPage);
