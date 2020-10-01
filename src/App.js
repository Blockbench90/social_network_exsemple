import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Profile/Message/DialogsContainer";
import UserContainer from "./components/Profile/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <div className="AppWrapper">
            <div className="AppHeader">
                <HeaderContainer/>
            </div>
            <div className="AppNavbar">
                <Navbar/>
            </div>
            <div className="AppProfile">
                <Route path='/' exact component={() => <ProfileContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' component={() => <DialogsContainer/>}/>
                <Route path='/users' component={() => <UserContainer pageTitle={"Title of Users"}/>}/>
                <Route path='/login' component={() => <Login/>}/>
            </div>
        </div>
    )
}


export default App;
