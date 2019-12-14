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

    constructor(props) {
        super(props)
    }

    goToDetails() {
        alert(1)
        // this.props.navigation.navigate('ProjectDetails')
    }

    listRender(data) {
        var item = data.item;
        var index = data.index;
        return (
            <View key={'project' + index} style={styles.projectCard}>
                <View style={[styles.imgView, globalStyle.centerWrap]}>
                    <Image source={images.common.libraryImg_3} style={styles.memberImg} />
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
                    <TouchableOpacity
                        onPress={() => this.goToDetails()}
                    >
                        <Image source={images.icons.detailsNavigateIcon}
                            style={styles.navigateImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
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
        // paddingLeft: 5,
        paddingRight: 10,
        borderRadius: 10,
        marginTop: 10
    },
    imgView: {
        flex: 27,
    },
    contentView: {
        flex: 67
    },
    navigationView: {
        flex: 6
    },
    navigateImage: {
        height: 22,
        width: 25
    },
    projectName: {
        fontSize: 13,
        fontFamily: fonts.SemiBold,
        paddingBottom: 10
    },
    locationView: {
        flexDirection: "row",
        alignItems:"center"
    },
    locationImg: {
        width: 18,
        height: 25
    },
    location: {
        fontSize: 10,
        fontFamily: fonts.regular,
        paddingLeft: 10
    },
    memberImg: {
        height: 65,
        width: 65,
        borderRadius: 35
    }
})
