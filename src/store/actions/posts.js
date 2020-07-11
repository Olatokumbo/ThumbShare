import {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const fetchPosts = () =>{
    return (dispatch) =>{
        const postsArray = [] 
        firestore.collection("posts").onSnapshot((snapShot)=>{
            snapShot.docs.map((doc)=> postsArray.push(doc.data()))
            dispatch({type: actionTypes.FETCH_POSTS, posts: postsArray})
        })
    }
}
export const unsubscribePosts= () =>{
    var unsubscribe = firestore.collection("cities")
    .onSnapshot((data)=>{
        console.log(data)
    })
unsubscribe();
}