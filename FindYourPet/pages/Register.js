import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '@firebase/app';
import '@firebase/auth';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            placeholderEmail: 'Your email here..',
            placeholderPass: 'Your pass here..',
            textEmail: '',
            textPass: '',
            textCity: '',
            textName: '',
            authenticating: false,
        }
    }
    initFirebase(){

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
    componentWillMount(){
       this.initFirebase();
    }
    onPressRegister(){
        this.setState({authenticating: true});
        firebase.auth().createUserWithEmailAndPassword(this.state.textEmail, this.state.textPass)
        .then(() =>{
            this.setState({authenticating: false})
        })
        .then(() => {
            alert('Now you can log in!');
            this.props.navigation.navigate('LogIn')
        })
        .catch((err)=>{
            console.log("err", err);
        })
       
    }
    renderCurrentState(){
        if(this.state.authenticating){
            return(
                <View>
                    <ActivityIndicator size="large" style={styles.loading} color="white"/>
                </View>
            )
        }else{
            return(
                <View>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(textEmail) => this.setState({ textEmail })}
                        value={this.state.textEmail}
                        placeholder={this.state.placeholderEmail}
                        placeholderTextColor="#eee"
                    />
                    <TextInput
                        style={[styles.inputs]}
                        onChangeText={(textPass) => this.setState({ textPass })}
                        value={this.state.textPass}
                        placeholder={this.state.placeholderPass}
                        placeholderTextColor="#eee"
                        password={true}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(textName) => this.setState({ textName })}
                        value={this.state.textName}
                        placeholder="Your name here.."
                        placeholderTextColor="#eee"
                    />
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(textCity) => this.setState({ textCity })}
                        value={this.state.textCity}
                        placeholder="City.."
                        placeholderTextColor="#eee"
                    />
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(textName) => this.setState({ textName })}
                        value={this.state.textName}
                        placeholder="Your age.."
                        placeholderTextColor="#eee"
                    />
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(textName) => this.setState({ textName })}
                        value={this.state.textName}
                        placeholder="Your favorite pet.."
                        placeholderTextColor="#eee"
                    />

                    <Text style={styles.button} onPress={() => this.onPressRegister()}>Register</Text>
                </View>
            )
        }
    }
    static navigationOptions = { title: 'Register' };
    render() {
        return (
            <ScrollView style={styles.container}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-between'
                }}>
                <LinearGradient colors={['#4A285E', '#773C65']} style={styles.linearGradient}>
                    {this.renderCurrentState()}
                </LinearGradient>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    loading:{
        flex: 1,
        alignSelf: 'center',
        color: 'white'
    },
    button: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#F5C58C",
        borderColor: "#F5C58C",
        fontSize: 17,
        fontWeight: "900",
        letterSpacing: 1,
        marginTop: 20,
        textAlign: 'center',
    },
    container: {
        flexGrow: 1,
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
    inputs: {
        marginTop: 10,
        width: Dimensions.get('window').width - 70,
        color: '#eee',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    register: {
        color: '#eee',
        position: 'absolute',
        bottom: 20,
    }
});