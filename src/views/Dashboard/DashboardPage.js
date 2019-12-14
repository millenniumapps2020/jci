import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { images, colors, globalStyle, fonts } from '../../res/';
import { POST } from '../../utils/API';

import Header from '../../components/Header'
import CardView from '../../components/CardView'
import { FlatList } from 'react-native-gesture-handler';

class DashboardPage extends Component {
    state = {
        eventList: []
    }
    componentDidMount() {
        this.intialApiCall();
    }
    intialApiCall() {
        var body = {}
        POST('getEvents', body).then((responseData) => {
            console.log(responseData);
            if (responseData.statusCode == 200) {
                this.setState({ eventList: list })
            } else {
                this.errorMessage(responseData.message)
            }
        }).catch((e) => {
            alert(1)
            console.log(e)
        })
    }
    errorMessage(error) {
        alert(error)
    }
    combineAddress = () => {
        var removeSpace = address.filter(item => item);
        return removeSpace.join() + ' - ' + zip_code
    }
    renderEventItem(data) {
        var item = data.item;
        var time = item.date_time.split(' ');

        var address = [item.address, item.address2, item.city, item.state, item.country];
        var removeSpace = address.filter(item => item);

        var combineAddress = removeSpace.join() + ' - ' + item.zip_code

        return (
            <CardView key={item.key}>
                <Text style={styles.eventTitleText}>
                    {item.event_name}
                </Text>
                <View style={globalStyle.eventDetailWrap}>
                    <Image source={images.icons.date_icon} style={globalStyle.labelIcon} />
                    <Text style={globalStyle.label} >{time[0]}</Text>
                    <View style={globalStyle.labelControl} >
                        <Image source={images.icons.time_icon} style={globalStyle.labelIcon} />
                        <Text style={globalStyle.label}>{time[1]}</Text>
                    </View>
                </View>
                <View style={globalStyle.eventDetailWrap}>
                    <Image source={images.icons.location} style={globalStyle.labelIcon} />
                    <View>
                        <Text style={globalStyle.label} >{item.location}</Text>
                        <Text style={globalStyle.labelHint} >{combineAddress}</Text>
                    </View>
                </View>
            </CardView>
        );
    }
    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"Dashboard"} subTitle={"Upcoming Events"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    {console.log(this.state.eventList)}
                    <FlatList
                        data={this.state.eventList}
                        renderItem={this.renderEventItem}
                        keyExtractor={(item, index) => (item.key = 'eventList' + index)}
                    />

                </View>
            </View >
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
})
export default (DashboardPage);
