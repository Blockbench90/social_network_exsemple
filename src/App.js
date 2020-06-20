import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Profile/Message/DialogsContainer";
import UserContainer from "./components/Profile/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfilePage/ProfilePageContainer";


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
                <Route path='/' exact component={() => <ProfileContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' component={() => <DialogsContainer/>}/>
                <Route path='/users' component={() => <UserContainer/>}/>
            </div>
        </div>
    )
}


export default App;
