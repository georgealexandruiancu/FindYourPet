/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';

// const App = StackNavigator({
//     LogIn: { screen: LogIn },
//     Register: { screen: Register }
// })
// const config = {
//     apiKey: "AIzaSyAcbsDqVts6VbPK17rXnPNo25yjcDtijMc",
//     authDomain: "findyourpet-7b636.firebaseapp.com",
//     databaseURL: "https://findyourpet-7b636.firebaseio.com",
//     projectId: "findyourpet-7b636",
//     storageBucket: "findyourpet-7b636.appspot.com",
//     messagingSenderId: "56275344115"
// };
// const firebaseApp = firebase.initializeApp(config);

AppRegistry.registerComponent(appName, () => App);
