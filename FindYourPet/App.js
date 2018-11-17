import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import HomePage from './pages/HomePage';


const App = StackNavigator({
  LogIn: {
    screen: LogIn,
    navigationOptions: () => ({
      header: null
    })
  },
  Register: { screen: Register },
  HomePage: { screen: HomePage,
    navigationOptions: () => ({
      header: null
    }) 
  }
})
export default App;

