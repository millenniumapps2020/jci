import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import { colors, globalStyle } from '../../res'
import Header from '../../components/Header'
import ProjectDetailsComponent from '../../components/common/ProjectDetailsComponent'

export default class ProjectDetailsPage extends Component {
    goBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"Projects Details"} leftPressed={this.goBack} />
                <View style={globalStyle.bodyWrap}>
                    <ProjectDetailsComponent />
                </View>
            </View>
        )
    }
}