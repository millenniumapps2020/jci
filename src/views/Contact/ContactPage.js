import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { images, colors, globalStyle, fonts } from '../../res/';

import Header from '../../components/Header'
import CardView from '../../components/CardView'

var { width, height } = Dimensions.get('window');
class ContactPage extends Component {
    state = {
        mail: 'jcierodeexcell@gmail.com',
        number: '90036-71434'

    }
    componentDidMount() {
    }
    render() {
        return (
            <ScrollView style={globalStyle.fullView}>
                <Header title={"Contact us"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={[globalStyle.bodyWrap, { paddingBottom: 30 }]}>
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
                                    {this.state.mail}
                                </Text>
                                <Image source={images.icons.Contact_us_mail_icon} style={styles.contactIcon} />

                            </View>
                            <View style={styles.contactView}>
                                <Image source={images.icons.Contact_us_call_icon} style={styles.contactIcon} />
                                <Text style={styles.numberText}>
                                    Ind {this.state.number}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.mapView}>
                            <Text style={styles.mapTitle}>Google map</Text>
                        </View>
                        <View style={{ marginLeft: -10, marginRight: -10, paddingBottom: 30 }}>
                            <WebView source={{
                                html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3911.7375785446475!2d77.7102684!3d11.3538683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f325f83fe21%3A0x9a05f5c71e68d558!2sJunior%20Chamber%20International!5e0!3m2!1sen!2sin!4v1576318116100!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
                            }}
                                style={{ width: "100%", height: 200 }} />
                        </View>
                    </CardView>

                </View>

            </ScrollView>
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
        fontSize: width*(3/100),
        lineHeight: 25,
        marginLeft: 30,
        fontFamily: fonts.regular,
        color: colors.textColor,
    },
    mailText: {
        fontSize: width*(3/100),
        lineHeight: 25,
        letterSpacing: 2,
        marginRight: 30,
        color: colors.textColor,
        fontFamily: fonts.regular
    },
    numberText: {
        fontSize: width*(3/100),
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
export default (ContactPage);
