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
                {
                    name: "Velmurugan",
                    designation: "Human Resource",
                    bloodGroup: "B positive",
                    phNo: "7502572509",
                    address: "Mayiladumparai, Theni-Dt",
                    email: "vel@gmail.com",
                    birthDay: "30 Jun 1995",
                    wedding: "12 Mar 2022"
                },
                {
                    name: "Ramesh A",
                    designation: "UI/UX",
                    bloodGroup: "AB positive",
                    phNo: "7502572509",
                    address: "Mayiladumparai, Theni-Dt",
                    email: "baburam@gmail.com",
                    birthDay: "30 Jun 1995",
                    wedding: "12 Mar 2022"
                },
                {
                    name: "Karthick",
                    designation: "Civil",
                    bloodGroup: "A positive",
                    phNo: "7502572509",
                    address: "Mayiladumparai, Theni-Dt",
                    email: "karthick@gmail.com",
                    birthDay: "30 Jun 1995",
                    wedding: "12 Mar 2022"
                }
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
                    <View style={styles.bottomDetails}>
                        <View style={styles.bDayView}>
                            <Image source={require('../res/images/icons/Cake_icon.png')} style={styles.bdayImg} />
                            <Text style={styles.bottomLabel}>Birthday</Text>
                            <Text style={styles.bottomVal}>{item.birthDay}</Text>
                        </View>
                        <View style={styles.weddingView}>
                            <Image source={require('../res/images/icons/Couple_icon.png')} style={styles.bdayImg} />
                            <Text style={styles.bottomLabel}>Wedding anniversary</Text>
                            <Text style={styles.bottomVal}>{item.wedding}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        const { membersList } = this.state;

        return (
            <FlatList
                style={{ marginTop: 10 }}
                data={membersList}
                renderItem={this.memberListRender}
                keyExtractor={(item, index) => ("memberList" + index)}
            />
        )
    }
}

const styles = StyleSheet.create({
    baseView: {
        backgroundColor: "#eeeeee"
    },
    memberView: {
        backgroundColor: "#ffffff",
        height: 190,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column"
    },
    detailsView: {
        flex: 7,
        display: "flex",
        flexDirection: "row",
        padding: 15
    },
    detailsVal_name: {
        fontSize: 14,
        fontWeight: "bold"
    },
    detailsVal: {
        fontSize: 12
    },
    bottomView: {
        display: "flex",
        flex: 3
    },
    bottomDetails: {
        backgroundColor: "#21c4ff",
        height: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    imageView: {
        flex: 2
    },
    detailsViewLeft: {
        flex: 3,
        display: "flex",
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
        fontSize: 11
    },
    bottomVal: {
        fontSize: 11,
        color: "#ffffff"
    },
    bDayView: {
        flex: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    weddingView: {
        flex: 6,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    bdayImg: {
        height: 25,
        width: 25
    }
})
