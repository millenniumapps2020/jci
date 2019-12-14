import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import { colors, globalStyle } from '../../res'
import Header from '../../components/Header'
import ProjectDetailsComponent from '../../components/common/ProjectDetailsComponent'

export default class ProjectDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"Projects Details"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    <ProjectDetailsComponent />
                </View>
            </View>
        )
    }
}