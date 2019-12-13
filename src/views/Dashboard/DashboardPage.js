import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { images, colors, globalStyle } from '../../res/';

import Header from '../../components/Header'
import CardView from '../../components/CardView'

class DashboardPage extends Component {
    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"Dashboard"} subTitle={"Upcoming Events"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    <CardView>
                        <Text style={styles.eventTitleText}>
                            Blood donation
                        </Text>
                        <View style={globalStyle.eventDetailWrap}>
                            <Image source={images.icons.date_icon} style={globalStyle.labelIcon} />
                            <Text style={globalStyle.label} >01 Jan 2019</Text>
                            <View style={globalStyle.labelControl} >
                                <Image source={images.icons.time_icon} style={globalStyle.labelIcon} />
                                <Text style={globalStyle.label} >08:00 AM</Text>
                            </View>
                        </View>
                        <View style={globalStyle.eventDetailWrap}>
                            <Image source={images.icons.location} style={globalStyle.labelIcon} />
                            <View>
                                <Text style={globalStyle.label} >Rotary Hall</Text>
                                <Text style={globalStyle.labelHint} >Paari Nagar, Kumalan Kuttai, Erode, Tamil Nadu 638011</Text>
                            </View>
                        </View>
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
        fontWeight:'600'
    },
})
export default (DashboardPage);
