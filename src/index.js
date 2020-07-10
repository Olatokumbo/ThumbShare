import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import firebase from "./firebase/firebase";
import {authReducer, postReducer} from "./store/reducers";
import App from "./App";
const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log("LOGGED IN USER")
    }
    else{
        console.log("LOGGED OUT USER")
    }
});
