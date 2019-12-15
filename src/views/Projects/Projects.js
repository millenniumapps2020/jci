import React, { Fragment, Component } from 'react'

import {
    StyleSheet,
    View,
} from 'react-native';

import ProjectCard from '../../components/common/ProjectCardComponent'

import { POST } from '../../utils/API';

import { colors, globalStyle } from '../../res'
import Header from '../../components/Header'

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projectList: []
        }
    }

    componentDidMount() {
        this.getProjectList()
    }

    getProjectList = () => {
        let body = {
            "type": "1"
        }
        POST('getProjects', body, this.apicallBack)
    }

    apicallBack = (key, data) => {
        if (key == "success") {
            this.setState({ projectList: data })
        } else {
            this.errorMessage(data)
        }
    }

    errorMessage = (error) => {
        alert(error)
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
