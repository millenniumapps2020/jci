import React, { Component, Fragment } from 'react'

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

import { colors } from '../res/colors'
import { SearchIcon } from './common/Icons'
import { PLACE_HOLDERS } from '../res/strings'
import { images } from '../res/images'

export default class MembersComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            membersList: [
                {
                    name: "Nishanth",
                    designation: "Developer",
                    bloodGroup: "O positive",
                    phNo: "7502572509",
                    address: "Mayiladumparai, Theni-Dt",
                    email: "nishanth@gmail.com",
                    birthDay: "30 Jun 1995",
                    wedding: "12 Mar 2022"
                },
                // {
                //     name: "Velmurugan",
                //     designation: "Human Resource",
                //     bloodGroup: "B positive",
                //     phNo: "7502572509",
                //     address: "Mayiladumparai, Theni-Dt",
                //     email: "vel@gmail.com",
                //     birthDay: "30 Jun 1995",
                //     wedding: "12 Mar 2022"
                // },
                // {
                //     name: "Ramesh A",
                //     designation: "UI/UX",
                //     bloodGroup: "AB positive",
                //     phNo: "7502572509",
                //     address: "Mayiladumparai, Theni-Dt",
                //     email: "baburam@gmail.com",
                //     birthDay: "30 Jun 1995",
                //     wedding: "12 Mar 2022"
                // },
                // {
                //     name: "Karthick",
                //     designation: "Civil",
                //     bloodGroup: "A positive",
                //     phNo: "7502572509",
                //     address: "Mayiladumparai, Theni-Dt",
                //     email: "karthick@gmail.com",
                //     birthDay: "30 Jun 1995",
                //     wedding: "12 Mar 2022"
                // }
            ]
        }
    }

    memberListRender(data) {
        var item = data.item;
        var index = data.index;
        return (
            <View key={'memberList' + index} style={styles.memberView}>
                <View style={styles.detailsView}>
                    <View style={styles.imageView}>

                    </View>
                    <View style={styles.detailsViewLeft}>
                        <Text style={styles.label}>Name</Text>
                        <Text style={styles.detailsVal_name}>{item.name}</Text>
                        <Text style={styles.label}>Blood Group</Text>
                        <Text style={styles.detailsVal}>{item.bloodGroup}</Text>
                        <Text style={styles.label}>Address</Text>
                        <Text style={styles.detailsVal}>{item.address}</Text>
                    </View>
                    <View style={styles.detailsViewRigth}>
                        <Text style={styles.label}>Designation</Text>
                        <Text style={styles.detailsVal}>{item.designation}</Text>
                        <Text style={styles.label}>Phone number</Text>
                        <Text style={styles.detailsVal}>{item.phNo}</Text>
                        <Text style={styles.label}>E-mail address</Text>
                        <Text style={styles.detailsVal}>{item.email}</Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <ImageBackground style={styles.bottomDetails}
                        resizeMode="stretch"
                        source={images.icons.birthDayTag}
                    >
                        <View style={styles.bottomViewContent}>
                            <View style={styles.bDayView}>
                                <Image source={images.icons.cakeIcon} style={styles.bdayImg} />
                                <Text style={styles.bottomLabel}>Birthday</Text>
                                <Text style={styles.bottomVal}>{item.birthDay}</Text>
                            </View>
                            <View style={styles.weddingView}>
                                <Image source={images.icons.coupleIcon} style={styles.bdayImg} />
                                <Text style={styles.bottomLabel}>Wedding anniversary</Text>
                                <Text style={styles.bottomVal}>{item.wedding}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    render() {
        const { membersList } = this.state;

        return (
            <View style={styles.baseView}>
                <View style={styles.searchInputView}>
                    <TextInput style={styles.searchInput}
                        placeholder={PLACE_HOLDERS.MEMBER_SEARCH}
                    />
                    <SearchIcon style={styles.searchIcon} />
                </View>

                <FlatList
                    style={{ marginTop: 10 }}
                    data={membersList}
                    renderItem={this.memberListRender}
                    keyExtractor={(item, index) => ("memberList" + index)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    baseView: {
        backgroundColor: colors.primaryBackground,
        height: "100%",
        width: "100%",
        padding: 15
    },
    searchInput: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        height: 40,
        width: '100%'
    },
    searchInputView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchIcon: {
        position: "absolute",
        right: 10,
        top: -10,

        height: 20,
        width: 20
    },
    memberView: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        flexDirection: "column",
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    detailsView: {
        flexDirection: "row"
    },
    detailsVal_name: {
        fontSize: 14,
        fontWeight: "bold"
    },
    detailsVal: {
        fontSize: 12
    },
    bottomView: {
        paddingTop: 10
    },
    bottomViewContent: {
        flexDirection: "row"
    },
    bottomDetails: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 2
    },
    imageView: {
        flex: 2
    },
    detailsViewLeft: {
        flex: 3,
        alignItems: "flex-start",
        justifyContent: "space-evenly"
    },
    detailsViewRigth: {
        flex: 3,
        alignItems: "flex-start",
        justifyContent: "space-evenly"
    },
    label: {
        fontSize: 11,
        color: "#949494"
    },
    bottomLabel: {
        fontSize: 11,
        color: "#ffffff"
    },
    bottomVal: {
        fontSize: 11,
        color: "#ffffff"
    },
    bDayView: {
        flex: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        paddingBottom: 5
    },
    weddingView: {
        flex: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        paddingBottom: 5
    },
    bdayImg: {
        height: 25,
        width: 25
    }
})
