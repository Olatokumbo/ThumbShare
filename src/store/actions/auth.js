import firebase from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const startSignup = (credentials) =>{
        return (dispatch) =>{
            firebase
            .auth()
            .createUserWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then((data)=>{
                dispatch({type: actionTypes.SIGNUP_SUCCESS, uid: data.uid})
            }).catch((err)=>{
                console.log(err.message)
                dispatch({type: actionTypes.SIGNUP_FAILED, error: err.message})
            })
        }
}

export const startSignin = (credentials) =>{
    return (dispatch)=>{
        firebase
        .auth()
        .signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((data)=>{
            dispatch({type: actionTypes.SIGNIN_SUCCESS, uid: data.uid})
        }).catch((err)=>{
            dispatch({type: actionTypes.SIGNIN_FAILED, error: err.message})
        })
    }
}

export const startSignout = () =>{
    return (dispatch)=>{
        firebase
        .auth()
        .signOut().then(()=>{
            dispatch({type: actionTypes.SIGNOUT})
        }).catch((err)=>{
            console.log(err.message)
        })
    }
}

export const reset = () =>{
    return (dispatch) =>{
        dispatch({type: actionTypes.RESET})
    }
}