import React, { Component } from 'react';

const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAcbsDqVts6VbPK17rXnPNo25yjcDtijMc",
    authDomain: "findyourpet-7b636.firebaseapp.com",
    databaseURL: "https://findyourpet-7b636.firebaseio.com",
    projectId: "findyourpet-7b636",
    storageBucket: "findyourpet-7b636.appspot.com",
    messagingSenderId: "56275344115"
};
firebase.initializeApp(config);

export default firebase;