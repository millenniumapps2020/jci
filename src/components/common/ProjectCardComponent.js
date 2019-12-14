import React, { Component } from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    ImageBackground,
    Text,
    TextInput,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';

import { images, globalStyle, fonts } from '../../res';

export default class ProjectCardComponent extends Component {


    listRender = (data) => {
        var item = data.item;
        var index = data.index;
        return (
            <TouchableOpacity onPress={() => this.props.cardPressed(item)}>
                <View key={'project' + index} style={styles.projectCard}>
                    <View style={styles.imgView}>

                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.projectName}>{item.name}</Text>
                        <View style={styles.locationView}>
                            <Image source={images.icons.locationIcon}
                                style={styles.locationImg}
                            />
                            <Text style={styles.location}>{item.location}</Text>
                        </View>
                    </View>
                    <View style={[styles.navigationView, globalStyle.centerWrap]}>

                        <Image source={images.icons.detailsNavigateIcon}
                            style={styles.navigateImage}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { projectList } = this.props

        return (
            <FlatList
                data={projectList}
                renderItem={this.listRender}
                keyExtractor={(item, index) => ("projectList" + index)}
            />
        )
    }
}


const styles = StyleSheet.create({
    projectCard: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        paddingTop: 18,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        marginTop: 10
    },
    imgView: {
        flex: 24
    },
    contentView: {
        flex: 70
    },
    navigationView: {
        flex: 6
    },
    navigateImage: {
        height: 22,
        width: 25
    },
    projectName: {
        fontSize: 17,
        fontFamily: fonts.SemiBold,
        paddingBottom: 10
    },
    locationView: {
        flexDirection: "row",
        // paddingBottom: 20
    },
    locationImg: {
        width: 18,
        height: 25
    },
    location: {
        fontSize: 12,
        fontFamily: fonts.SemiBold,
        paddingLeft: 10
    }
})
