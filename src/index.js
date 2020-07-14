import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import firebase from "./firebase/firebase";
import {authReducer, postReducer} from "./store/reducers";
import * as actionType from "./store/actions/actionTypes";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
    if(user){
        console.log("LOGGED IN USER");
        console.log(user);
        store.dispatch({type: actionType.SIGNIN_SUCCESS, uid: user.uid, displayName: user.displayName, photoURL: user.photoURL, email: user.email});
    }
    else{
        console.log("LOGGED OUT USER")
    }
});
