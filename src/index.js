import React from "react";
import store from "./redux/old-state";
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
            <App dispatch={store.dispatch.bind(store)} state={state}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    debugger;
    let state = store.getState()
    rerenderEntireTree(state)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
