import React, { Component, Fragment } from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    ImageBackground,
    Text,
    TextInput,
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
                    name: "Babu Ram",
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

    render() {
        const { membersList } = this.state;

        return (
            <ScrollView style={styles.baseView}>
                {
                    membersList.length ?
                        membersList.map((item, index) => {
                            return (
                                <View key={index} style={styles.memberView}>
                                    <View style={styles.detailsView}>
                                        <View style={styles.imageView}>

                                        </View>
                                        <View style={styles.detailsViewLeft}>
                                            <Text style={styles.label}>Name</Text>
                                            <Text>{item.name}</Text>
                                            <Text style={styles.label}>Blood Group</Text>
                                            <Text>{item.bloodGroup}</Text>
                                            <Text style={styles.label}>Address</Text>
                                            <Text>{item.address}</Text>
                                        </View>
                                        <View style={styles.detailsViewRigth}>
                                            <Text style={styles.label}>Designation</Text>
                                            <Text>{item.designation}</Text>
                                            <Text style={styles.label}>Phone number</Text>
                                            <Text>{item.phNo}</Text>
                                            <Text style={styles.label}>E-mail address</Text>
                                            <Text>{item.email}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.bottomView}>
                                        <View style={styles.bottomDetails}>
                                            <Text>Birthday</Text>
                                            <Text>{item.birthDay}</Text>
                                            <Text>Wedding anniversary</Text>
                                            <Text>{item.wedding}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                        : null
                }
            </ScrollView>
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
        flexDirection: "row"
    },
    bottomView: {
        display: "flex",
        flex: 3
    },
    bottomDetails: {
        backgroundColor: "#21c4ff",
        height: "70%",
        display: "flex",
        flexDirection: "row"
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
        color: "#b0b0b0"
    }
})
