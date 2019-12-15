import React, { Fragment, Component } from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import ProjectCard from '../../components/common/ProjectCardComponent'

import { POST } from '../../utils/API';

import { colors, globalStyle } from '../../res'
import Header from '../../components/Header'

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projectList: [],
            loading: false
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', () => {
            this.getProjectList()
        });
    }

    getProjectList = () => {
        this.setState({ projectList: [], loading: true })
        let body = {
            "type": "1"
        }
        POST('getProjects', body, this.apicallBack)
    }

    apicallBack = (key, data) => {
        if (key == "success") {
            this.setState({ loading: false, projectList: data })
        } else {
            this.setState({ loading: false })
            this.errorMessage(data)
        }
    }

    errorMessage = (error) => {
        alert(error)
    }

    goToProjectDetails = (data) => {
        this.props.navigation.navigate(
            'ProjectDetailsPage',
            { projectId: data.project_id, title: "Project Details" }
        )
    }

    render() {
        const { projectList, loading } = this.state;

        return (
            <View style={globalStyle.fullView}>
                <Header title={"Projects"} leftPressed={() => this.props.navigation.openDrawer()} />
                {
                    projectList.length ?
                        <View style={globalStyle.bodyWrap}>
                            <ProjectCard projectList={projectList} cardPressed={this.goToProjectDetails} />
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    msgTextView: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})
