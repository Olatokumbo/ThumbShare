import {firestore} from "../../firebase/firebase";

export const fetchComments = (postId) =>{
        firestore
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot)=>{
          snapshot.docs.map((doc)=> doc.data())
        });
}

export const addComment =(postId, name, text) =>{
    firestore
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .add({
        text, name
    })
}