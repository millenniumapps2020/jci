import React, { Component, Fragment } from 'react'

import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TextInput,
    FlatList,
    Image
} from 'react-native';

import { POST } from '../../utils/API';

import { colors } from '../../res'
import { SearchIcon } from '../../components/common/Icons'
import { PLACE_HOLDERS } from '../../res/strings'
import { images, globalStyle, fonts } from '../../res';
import Header from '../../components/Header'

export default class MembersComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            membersList: [],
            searchString: "",
            loading: false
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', () => {
            this.setState({ searchString: "" }, () => {
                this.getMemberList()
            })
        });
    }

    getMemberList = () => {
        this.setState({ membersList: [], loading: true })
        let body = {
            "search": this.state.searchString,
            "limit": "10",
            "offset": "0"
        }
        POST('members', body, this.apicallBack)
    }

    apicallBack = (key, data) => {
        if (key == "success") {
            this.setState({ loading: false, membersList: data })
        } else {
            this.setState({ loading: false })
            errorMessage(data)
        }
    }

    errorMessage(error) {
        alert(error)
    }

    onSearchMember = (value) => {
        this.setState({ searchString: value }, () => {
            this.getMemberList()
        })
    }

    memberListRender(data) {
        var item = data.item;
        var index = data.index;
        return (
            <View key={'memberList' + index} style={styles.memberView}>
                <View style={styles.detailsView}>
                    <View style={[styles.imageView, globalStyle.centerWrap]}>
                        <Image source={{ uri: item.profile_image }}
                            style={styles.memberImage}
                        />
                    </View>
                    <View style={styles.detailsViewContent}>
                        <View style={[styles.detailsRow1, styles.detailsRow]}>
                            <View style={styles.detailsLeft}>
                                <Text style={styles.label}>Name</Text>
                                <Text style={styles.detailsVal_name}>{item.name}</Text>
                            </View>
                            <View style={styles.detailsRight}>
                                <Text style={styles.label}>Designation</Text>
                                <Text style={styles.detailsVal}>{item.designation}</Text>
                            </View>
                        </View>
                        <View style={[styles.detailsRow2, styles.detailsRow]}>
                            <View style={styles.detailsLeft}>
                                <Text style={styles.label}>Blood Group</Text>
                                <Text style={styles.detailsVal}>{item.blood_group}</Text>
                            </View>
                            <View style={styles.detailsRight}>
                                <Text style={styles.label}>Phone number</Text>
                                <Text style={styles.detailsVal}>{item.phone_number}</Text>
                            </View>
                        </View>
                        <View style={[styles.detailsRow2, styles.detailsRow]}>
                            <View style={styles.detailsLeft}>
                                <Text style={styles.label}>Address</Text>
                                <Text style={styles.detailsVal}>{item.address}</Text>
                            </View>
                            <View style={styles.detailsRight}>
                                <Text style={styles.label}>E-mail address</Text>
                                <Text style={styles.detailsVal}>{item.email_address}</Text>
                            </View>
                        </View>
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
                                <Text style={styles.bottomVal}>{item.dob}</Text>
                            </View>
                            <View style={styles.weddingView}>
                                <Image source={images.icons.coupleIcon} style={styles.bdayImg} />
                                <Text style={styles.bottomLabel}>Wedding anniversary</Text>
                                <Text style={styles.bottomVal}>{item.wedding_date}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    render() {
        const { membersList, loading } = this.state;

        return (
            <View style={globalStyle.fullView}>
                <Header title={"Members"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    <View style={styles.searchInputView}>
                        <TextInput
                            value={this.state.searchString}
                            style={styles.searchInput}
                            placeholder={PLACE_HOLDERS.MEMBER_SEARCH}
                            onChangeText={(e) => this.onSearchMember(e)}
                        />
                        <SearchIcon style={styles.searchIcon} />
                    </View>

                    {
                        membersList.length ?
                            <FlatList
                                data={membersList}
                                renderItem={this.memberListRender}
                                keyExtractor={(item, index) => ("memberList" + index)}
                            />
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

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        height: 40,
        width: '100%',
        paddingLeft: 15,
        fontSize: 12
    },
    searchInputView: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
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
        paddingBottom: 15,
        marginBottom: 10
    },
    detailsView: {
        flexDirection: "row"
    },
    detailsVal_name: {
        fontSize: 15,
        fontFamily: fonts.SemiBold
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
        flex: 3
    },
    detailsViewContent: {
        flex: 7,
    },
    detailsRow: {
        paddingBottom: 5
    },
    detailsRow1: {
        flexDirection: "row"
    },
    detailsRow2: {
        flexDirection: "row"
    },
    detailsRow3: {
        flexDirection: "row"
    },
    detailsLeft: {
        flex: 1
    },
    detailsRight: {
        flex: 1
    },
    label: {
        fontSize: 11,
        color: "#949494"
    },
    bottomLabel: {
        fontSize: 10,
        color: "#ffffff",
        fontWeight: "bold"
    },
    bottomVal: {
        fontSize: 10,
        color: "#ffffff",
        fontWeight: "bold"
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
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    bdayImg: {
        height: 22,
        width: 22
    },
    memberImage: {
        height: 78,
        width: 78,
        borderRadius: 36
    },
    msgTextView: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})
