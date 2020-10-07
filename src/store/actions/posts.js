import firebase, {firestore, storage} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const fetchPosts = () =>{
    return (dispatch) =>{
        let postsArray = [] 
        firestore.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapShot)=>{
            snapShot.docs.map((doc)=> postsArray.push({...{id: doc.id}, ...doc.data()}))
            dispatch({type: actionTypes.FETCH_POSTS, posts: postsArray})
            postsArray =[];
        })
    }
}

export const addPosts = (data) =>{
    return (dispatch)=>{
        let uploadTask = storage.ref(`images/${data.image.name}`).put(data.image);

        uploadTask.on("state_changed", (snapshot)=>{
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            dispatch({type:actionTypes.PROGESS, progress});
        },
        (error) =>{
            console.log(error);
            alert(error.message);
        },()=>{
            storage
            .ref("images")
            .child(data.image.name)
            .getDownloadURL()
            .then(url=>{
                firestore.collection("posts").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: data.caption,
                    imageUrl: url,
                    name:data.displayName,
                    userId: data.uid,
                    photoURL: data.photoURL
                })
                dispatch({type: actionTypes.RESET})
            })
        }
        );
    }
}
export const unsubscribePosts= () =>{
    console.log("Unsubscribe");
    firestore.collection("posts")
    .onSnapshot((data)=>{
        console.log(data)
    })
}