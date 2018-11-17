import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    ScrollView,
    Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logoColor from '../assets/logoColor.png';
import firebase from '@firebase/app';
import '@firebase/auth';

export default class LogIn extends Component {
    constructor(){
        super();
        this.state = {
            placeholderEmail: 'Your email here..',
            placeholderPass: 'Your pass here..',
            textEmail: '',
            textPass: '',
            activeUser: false
        }
        this.checkConn = this.checkConn.bind(this);
    }
    static navigationOptions = { title: 'LogIn' };
    initFirebase() {

        var config = {
            apiKey: "AIzaSyAcbsDqVts6VbPK17rXnPNo25yjcDtijMc",
            authDomain: "findyourpet-7b636.firebaseapp.com",
            databaseURL: "https://findyourpet-7b636.firebaseio.com",
            projectId: "findyourpet-7b636",
            storageBucket: "findyourpet-7b636.appspot.com",
            messagingSenderId: "56275344115"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
            
        }
    }
    checkConn() {
        this.props.navigation.navigate('HomePage')
    }
    componentDidMount() {
        this.initFirebase();
        const { navigate } = this.props.navigation;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setTimeout(function(){
                    navigate('HomePage')
                });
            }
        })
    }
    
    fetchLogIn(){
        alert("da");
        firebase.auth().signInWithEmailAndPassword(this.state.textEmail, this.state.textPass)
        .then(() => {
            this.props.navigation.navigate('HomePage')
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
    render() {
        return (
            <ScrollView style={styles.container} 
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-between'
                }}>
            <LinearGradient colors={['#4A285E', '#773C65']} style={styles.linearGradient}>
                <Image style={styles.logo} source={logoColor} />
                <TextInput
                    style={styles.inputs}
                    onChangeText={(textEmail) => this.setState({ textEmail })}
                    value={this.state.textEmail}
                    placeholder={this.state.placeholderEmail}
                    placeholderTextColor="#eee"
                />
                <TextInput
                        style={[styles.inputs, { marginBottom: 10}]}
                    onChangeText={(textPass) => this.setState({ textPass })}
                    value={this.state.textPass}
                    placeholder={this.state.placeholderPass}
                    placeholderTextColor="#eee"
                    password={true}
                    secureTextEntry={true}
                />
                    <Text style={styles.button} onPress={() => this.fetchLogIn()}>Log In</Text>
                <Text style={styles.register}
                      onPress={() => this.props.navigation.navigate('Register')}
                >
                    You don't have an account? Register here!
                </Text>
            </LinearGradient>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    button:{
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#F5C58C",
        borderColor: "#F5C58C",
        fontSize: 17,
        fontWeight: "900",
        letterSpacing: 1,
    },
    container:{
        flexGrow: 1,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    }, 
    logo: {
        alignSelf:'center',
        width: 85,
        resizeMode: 'contain'
    },
    inputs: {
        marginTop: 10,
        width: Dimensions.get('window').width - 70,
        color: '#eee',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    register: {
        color: '#eee',
        position: 'absolute',
        bottom: 20,
    }
});