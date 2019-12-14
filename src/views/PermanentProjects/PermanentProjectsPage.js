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

import ProjectCard from '../../components/common/ProjectCardComponent'

import { colors, globalStyle } from '../../res'
import Header from '../../components/Header'

export default class PermanentProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projectList: [
                {
                    name: "River maintenance",
                    location: "Erode Highroad"
                },
                {
                    name: "Government school library maintenance",
                    location: "Erode Government School"
                }
            ]
        }
    }

    render() {
        const { projectList } = this.state;

        return (
            <View style={globalStyle.fullView}>
                <Header title={"Permanent Projects"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    <ProjectCard projectList={projectList} />
                </View>
            </View>
        )
    }
}