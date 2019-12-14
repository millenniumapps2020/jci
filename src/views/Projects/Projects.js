import React, { Fragment, Component } from 'react'

import {
    StyleSheet,
    View,
} from 'react-native';

import ProjectCard from '../../components/common/ProjectCardComponent'

import { colors, globalStyle } from '../../res'
import Header from '../../components/Header'

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projectList: [
                {
                    name: "Government school library maintenance",
                    location: "Erode Government School"
                },
                {
                    name: "River maintenance",
                    location: "Erode Highroad"
                },
                {
                    name: "Government school library maintenance",
                    location: "Erode Government School"
                },
                {
                    name: "River maintenance",
                    location: "Erode Highroad"
                },
            ]
        }
    }

    goToProjectDetails = (data) => {
        this.props.navigation.navigate('ProjectDetailsPage')
    }

    render() {
        const { projectList } = this.state;

        return (
            <View style={globalStyle.fullView}>
                <Header title={"Projects"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    <ProjectCard projectList={projectList} cardPressed={this.goToProjectDetails} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
