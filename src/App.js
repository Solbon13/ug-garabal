import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Users from "./components/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";



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
        <BrowserRouter>
        <div className="container">
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path = '/dialogs' component={Dialogs}/>
                    <Route path = '/profile' component={Profile}/>
                    <Route path = '/news' component={News}/>
                    <Route path = '/users' component={Users}/>
                </div>
            </div>



        </div>
  </BrowserRouter>

  );
  }
}

export default App;