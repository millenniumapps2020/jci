import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { images, colors, globalStyle, fonts } from '../../res/';
import Header from '../../components/Header'
import CardView from '../../components/CardView'
import { ScrollView } from 'react-native-gesture-handler';

class AboutPage extends Component {
    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"About us"} leftPressed={() => this.props.navigation.openDrawer()} />

                <ScrollView style={globalStyle.bodyWrap}>
                    <CardView style={{ padding: 0 }}>
                        <Image source={images.common.gallery_image_1} style={{height:200 }} resizeMode="stretch" />
                        <View style={styles.contentWrap}>
                            <Text style={styles.contentText}>
                                JCI is a non-profit organization of young active citizens age 18 to 40 who are engaged and committed to creating impact in their communities. Active citizens are individuals invested in the future of our world. JCI gathers active citizens from all sectors of society.
                                We develop the skills, knowledge and understanding to make informed decisions and take action. As globally minded young people, we all have rights, responsibilities and share goals. We find targeted solutions to local issues benefitting our communities, our world and our future. Embracing new ideas, collaboration and diversity, we have the passion and courage to address the critical challenges of our time.
                            </Text>
                        </View>

                        <Image source={images.common.gallery_image_1} style={{height:200,marginTop:20 }} resizeMode="stretch" />
                        <View style={styles.contentWrap}>
                            <Text style={styles.contentText}>
                                JCI is a non-profit organization of young active citizens age 18 to 40 who are engaged and committed to creating impact in their communities. Active citizens are individuals invested in the future of our world. JCI gathers active citizens from all sectors of society.
                                We develop the skills, knowledge and understanding to make informed decisions and take action. As globally minded young people, we all have rights, responsibilities and share goals. We find targeted solutions to local issues benefitting our communities, our world and our future. Embracing new ideas, collaboration and diversity, we have the passion and courage to address the critical challenges of our time.
                            </Text>
                        </View>

                    </CardView>
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    contentWrap: {
        paddingLeft: 20,
        paddingRight: 15,
    },
    contentText:{
        fontSize:13,
        marginTop:20,  
        textAlign:'justify',
        fontFamily:fonts.regular 

    }
})
export default AboutPage;
