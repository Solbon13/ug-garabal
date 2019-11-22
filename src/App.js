import React, { Component } from 'react';
import MessageList from "./components/MessageList";
import Header from "./components/Header";
import firebase from 'firebase';
import MessageBox from "./components/MessageBox";

class App extends Component {

    constructor(props){
        super(props);
        var сonfig = {
            apiKey: "AIzaSyCl2bpoGi4VPXC8GfUQx7iz3rNHPSnQpDQ",
            authDomain: "ug-garabal.firebaseapp.com",
            databaseURL: "https://ug-garabal.firebaseio.com",
            projectId: "ug-garabal",
            storageBucket: "ug-garabal.appspot.com",
            messagingSenderId: "692578517035",
            appId: "1:692578517035:web:422b134779d9383f67ea6e",
            measurementId: "G-Y7PJXXTRC4"
        };
        // Initialize Firebase
        firebase.initializeApp(сonfig);
    }


  render() {
    return (
        <div className="container">
            <Header title="Simple Firebase App" />
            <div className="columns">
                <div className="column is-3"></div>
                <div className="column is-6">
                    <MessageList db={firebase} />
                </div>
            </div>
            <div className="columns">
                <div className="column is-3"></div>
                <div className="column is-6">
                    <MessageBox db={firebase} />
                </div>
            </div>
        </div>
    );
  }
}

export default App;