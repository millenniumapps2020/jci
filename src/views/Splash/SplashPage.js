import React, { Component } from 'react';
import { Platform, StyleSheet, Animated, Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyle, images } from '../../res';

class SplashPage extends Component {
    state = {
        springValue: new Animated.Value(0.6),
    }
    componentDidMount() {
        this.spring()
        this.timerHandle = setTimeout(() => {
            this.props.navigation.navigate('Drawer');
        }, 3000);
    }
    spring() {
        Animated.spring(
            this.state.springValue,
            {
                toValue: 1,
                friction: 1,
            }
        ).start()
    }
    componentWillUnmount() {
        if (this.timerHandle) {                  // ***
            clearTimeout(this.timerHandle);      // ***
            this.timerHandle = 0;                // ***
        }
    }
    render() {
        return (
            <View style={globalStyle.container}>
                <Animated.Image style={[styles.image, { transform: [{ scale: this.state.springValue }] }]} source={images.common.logo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 2002 / 7,
        height: 1032 / 7
    }
})

export default SplashPage;
