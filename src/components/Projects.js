import React, { Fragment, Component } from 'react'

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

import ProjectCard from './common/ProjectCardComponent'

import { colors } from '../res/colors'

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projectList: [
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
            <View style={styles.baseView}>
                <ProjectCard projectList={projectList} />
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

})
