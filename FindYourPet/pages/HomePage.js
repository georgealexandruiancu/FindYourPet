import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,

} from 'react-native';
import Slider from './../components/Slider.js';
import LinearGradient from 'react-native-linear-gradient';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            placeholderEmail: 'Your email here..',
            placeholderPass: 'Your pass here..',
            textEmail: '',
            textPass: ''
        }
    }
   
    static navigationOptions = { title: 'HomePage' };
    render() {
        return (
            <ScrollView style={styles.container}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-between'
                }}>
                <LinearGradient colors={['#4A285E', '#773C65']} style={styles.linearGradient}>
                    <Slider></Slider>
                </LinearGradient>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#eee",
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    logo: {
        alignSelf: 'center',
        width: 85,
        resizeMode: 'contain'
    },
});