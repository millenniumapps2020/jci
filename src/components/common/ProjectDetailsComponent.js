import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { images, globalStyle, fonts, colors } from '../../res';

export default class ProjectDetailsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            details: {
                name: "Government school library maintenance",
                location: "Erode Government School"
            }
        }
    }

    render() {
        const { details } = this.state;

        return (
            <ScrollView>
                <View style={[styles.baseView, globalStyle.centerWrap]}>
                    <View style={[styles.headerView, globalStyle.centerWrap]}>
                        <Text style={styles.projectName}>{details.name}</Text>
                        <View style={styles.locationView}>
                            <Image source={images.icons.locationIcon}
                                style={styles.locationImg}
                            />
                            <Text style={styles.location}>{details.location}</Text>
                        </View>
                    </View>
                    <View style={styles.hrLine}></View>

                    <Text style={styles.detailsContent}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
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
                            <Image source={images.common.libraryImg_1} style={styles.image} />
                            <Image source={images.common.libraryImg_2} style={styles.image} />
                            <Image source={images.common.libraryImg_3} style={styles.image} />
                            <Image source={images.common.libraryImg_4} style={styles.image} />
                        </View>
                        <View style={styles.subHeadingRow}>
                            <Text style={styles.gallerySubText}>Photos</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllBtn}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imgView}>
                            <Image source={images.common.libraryImg_1} style={styles.image} />
                            <Image source={images.common.libraryImg_2} style={styles.image} />
                            <Image source={images.common.libraryImg_3} style={styles.image} />
                            <Image source={images.common.libraryImg_4} style={styles.image} />
                        </View>
                    </View>
                </View>
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
    }
})