import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/Profile/ProfilePage/ProfilePage";
import {Route} from "react-router-dom";
import Users from "./components/Profile/Users/Users";
import DialogsContainer from "./components/Profile/Message/DialogsContainer";


const App = (props) => {
    debugger;
    return (
        <div className="AppWrapper">
            <div className="AppHeader">
                <Header/>
            </div>
            <div className="AppNavbar">
                <Navbar/>
            </div>
            <div className="AppProfile">
                <Route path='/' exact component={() => <ProfilePage/>}/>
                <Route path='/profile' render={() => <ProfilePage />}/>
                <Route path='/dialogs' component={() => <DialogsContainer />}/>
                <Route path='/users' component={() => <Users/>}/>
            </div>
        </div>
    )
}


export default App;
