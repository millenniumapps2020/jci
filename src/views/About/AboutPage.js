import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { images, colors, globalStyle, fonts } from '../../res/';

import Header from '../../components/Header'
import CardView from '../../components/CardView'

class AboutPage extends Component {
    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"About us"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    <CardView>
                        <View style={styles.contactViewWrap}>
                            <View style={styles.contactView}>
                                <Image source={images.icons.Contact_us_location_icon} style={styles.contactIcon} />
                                <Text style={styles.addressText}>
                                    JCI ERODE EXCELL (JAYCEES) {"\n"}
                                    34, RAJAJI STREET,{"\n"}
                                    VEERAPPAN CHATHIRAM,{"\n"}
                                    ERODE-638004, TAMILNADU{"\n"}
                                </Text>
                            </View>
                            <View style={[styles.contactView, { justifyContent: 'flex-end' }]}>
                                <Text style={styles.mailText}>
                                    jcierodeexcell@gmail.com
                                </Text>
                                <Image source={images.icons.Contact_us_location_icon} style={styles.contactIcon} />

                            </View>
                            <View style={styles.contactView}>
                                <Image source={images.icons.Contact_us_location_icon} style={styles.contactIcon} />
                                <Text style={styles.numberText}>
                                    Ind 90036-71434
                                </Text>
                            </View>
                        </View>
                        <View style={styles.mapView}>
                            <Text style={styles.mapTitle}>Google map</Text>
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
        fontWeight: '600',
        fontFamily: fonts.SemiBold
    },
    contactViewWrap: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    contactView: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 1
    },
    contactIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    addressText: {
        fontSize: 15,
        lineHeight: 25,
        marginLeft: 30,
        fontFamily: fonts.regular,
        color: colors.textColor,
    },
    mailText: {
        fontSize: 15,
        lineHeight: 25,
        letterSpacing: 2,
        marginRight: 30,
        color: colors.textColor,
        fontFamily: fonts.regular
    },
    numberText: {
        fontSize: 15,
        letterSpacing: 2,
        lineHeight: 25,
        marginLeft: 30,
        fontFamily: fonts.regular,
        color: colors.textColor,
    },
    mapView: {
        alignItems: 'center'
    },
    mapTitle: {
        padding: 20,
        fontSize: 14,
    }

})
export default AboutPage;
