import firebase from "../../firebase/firebase";
// import * as actionTypes from "./actionTypes";

export const startSignup = (credentials) =>{
        return () =>{
            firebase
            .auth()
            .createUserWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then((data)=>{
                console.log(data);
            }).catch((err)=>{
                console.log(err.message)
            })
        }
}

export const startSignin = (credentials) =>{
    return ()=>{
        firebase
        .auth()
        .signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err.message);
        })
    }
}

export const startSignout = () =>{
    return ()=>{
        firebase
        .auth()
        .signOut().catch((err)=>{
            console.log(err.message)
        })
    }
}