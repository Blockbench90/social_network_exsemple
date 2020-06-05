import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/Profile/ProfilePage/ProfilePage";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Profile/Message/Dialogs";
import Users from "./components/Profile/Users/Users";


const App = (props) => {
    return (
            <div className="AppWrapper">
                <div className="AppHeader">
                    <Header/>
                </div>
                <div className="AppNavbar">
                    <Navbar/>
                </div>
                <div className="AppProfile">
                    <Route path='/' exact component={() => <ProfilePage state={props.state} addPost={props.addPost}/>}/>
                    <Route path='/profile' render={() => <ProfilePage state={props.state}/>} addPost={props.addPost}/>
                    <Route path='/dialogs' component={() => <Dialogs dialogsPage={props.state.dialogPage}/>}/>
                    <Route path='/users' component={() => <Users/>}/>
                </div>
            </div>
    )
}


export default App;
