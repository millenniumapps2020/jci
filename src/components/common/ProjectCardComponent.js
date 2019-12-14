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

export default class ProjectCardComponent extends Component {

    constructor(props) {
        super(props)
    }

    listRender(data) {
        var item = data.item;
        var index = data.index;
        return (
            <View key={'project' + index} style={styles.projectCard}>
                <View style={styles.imgView}>

                </View>
                <View style={styles.contentView}>
                    <Text>{item.name}</Text>
                    <View>
                        <Text>{item.location}</Text>
                    </View>
                </View>
                <View style={styles.navigationView}>

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
        padding: 10,
        borderRadius: 10
    },
    imgView: {
        flex: 2
    },
    contentView: {
        flex: 7
    },
    navigationView: {
        flex: 1
    }
})
