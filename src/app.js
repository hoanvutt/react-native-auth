import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDoTlo5FyIsoldWnwymy36KmrcHDqs49P4',
      authDomain: 'authentication-10e16.firebaseapp.com',
      databaseURL: 'https://authentication-10e16.firebaseio.com',
      projectId: 'authentication-10e16',
      storageBucket: 'authentication-10e16.appspot.com',
      messagingSenderId: '31100168712'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
