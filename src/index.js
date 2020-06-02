import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
let posts = [
    {id: 1, post:'It is props from first message'},
    {id: 2, post:'It is props from second message'}
]
let dialogs = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Mitya"},
    {id: 3, name: "Kewin"},
    {id: 4, name: "Luck"},
    {id: 5, name: "Sim"}
]
let messageData = [
    {id: 1, message: "Hallo, am glad to see yuo"},
    {id: 2, message: "Hallo"},
    {id: 3, message: "am glad"},
    {id: 4, message: " to see yuo"}
]

ReactDOM.render(<BrowserRouter>
    <App posts={posts} dialogs={dialogs} messageData={messageData}/>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
