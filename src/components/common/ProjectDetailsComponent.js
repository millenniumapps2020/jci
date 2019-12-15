import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { POST } from '../../utils/API';

import { images, globalStyle, fonts, colors } from '../../res';

export default class ProjectDetailsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            details: '',
            loading: false
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', () => {
            this.getProjectDetails()
        });
    }

    getProjectDetails = () => {
        this.setState({ details: '', loading: true })
        var body = {
            "type": "1",
            "projectId": this.props.projectId
        }
        POST('projectDetails', body, this.apicallBack)
    }

    apicallBack = (key, data) => {
        if (key == "success") {
            this.setState({ loading: false, details: data[0] ? data[0] : {} })
        } else {
            this.setState({ loading: false })
            this.errorMessage(data)
        }
    }

    errorMessage = (error) => {
        alert(error)
    }

    render() {
        const { details, loading } = this.state;

        return (
            <ScrollView>
                {
                    details ?
                        <View style={[styles.baseView, globalStyle.centerWrap]}>
                            <View style={[styles.headerView, globalStyle.centerWrap]}>
                                <Text style={styles.projectName}>{details.name}</Text>
                                <View style={styles.locationView}>
                                    <Image source={images.icons.locationIcon}
                                        style={styles.locationImg}
                                    />
                                    <Text style={styles.location}>{details.client_name}</Text>
                                </View>
                            </View>
                            <View style={styles.hrLine}></View>

                            <Text style={styles.detailsContent}>
                                {details.description}
                            </Text>

                            <View style={styles.hrLine}></View>

                            <View style={styles.galleryView}>
                                <Text style={styles.galleryText}>Gallery</Text>
                                <View style={styles.subHeadingRow}>
                                    <Text style={styles.gallerySubText}>Recent photos</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.seeAllBtn}>See all</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.imgView}>
                                    {
                                        details.images ?
                                            details.images.length ?
                                                details.images.map((item, index) => {
                                                    return (
                                                        <Image key={index}
                                                            source={{ uri: item.image_url }}
                                                            style={styles.image}
                                                        />
                                                    )
                                                })
                                                :
                                                null
                                            :
                                            null
                                    }
                                </View>
                            </View>
                        </View>
                        :
                        loading ?
                            <View style={styles.msgTextView}>
                                <Text>Loading ...</Text>
                            </View>
                            :
                            <View style={styles.msgTextView}>
                                <Text>No data found</Text>
                            </View>
                }

            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    baseView: {
        backgroundColor: "#ffffff",
        flexDirection: "column",
        padding: 20,
        borderRadius: 10,
        marginTop: 10
    },
    headerView: {

    },
    projectName: {
        fontSize: 22,
        fontFamily: fonts.SemiBold,
        paddingBottom: 10,
        textAlign: "center"
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
        fontSize: 15,
        fontFamily: fonts.SemiBold,
        paddingLeft: 10
    },
    hrLine: {
        height: 1,
        width: "80%",
        backgroundColor: colors.primaryBackgroundColor,
        marginTop: 15,
        marginBottom: 15
    },
    detailsContent: {
        fontSize: 12,
        fontFamily: fonts.regular,
        textAlign: "justify"
    },
    galleryView: {
        width: "100%"
    },
    galleryText: {
        fontSize: 16,
        paddingBottom: 5,
        fontFamily: fonts.SemiBold
    },
    gallerySubText: {
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 15,
        fontFamily: fonts.SemiBold
    },
    seeAllBtn: {
        fontSize: 12,
        color: "gray",
        fontFamily: fonts.SemiBold
    },
    subHeadingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imgView: {
        width: "100%",
        flexDirection: "row",
        paddingBottom: 10,
    },
    image: {
        height: 70,
        width: "25%",
        margin: 1
    },
    msgTextView: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})