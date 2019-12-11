import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
class SplashPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Splash Page</Text>
            </View>
        );
    }
}

export default SplashPage

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.primary,
        margin: 10,
    }
});