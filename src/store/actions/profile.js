import firebase, {storage, firestore} from "../../firebase/firebase";
import * as actionTypes from "../../store/actions/actionTypes";
export const updateProfilePhoto = (photo) =>{
    return (dispatch)=>{
        let uploadTask = storage.ref(`users/${photo.name}`).put(photo);
        uploadTask.on("state_changed", (snapshot)=>{
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Progress", progress);
        },
        (error) =>{
            console.log(error);
            alert(error.message);
        },()=>{
            storage
            .ref("users")
            .child(photo.name)
            .getDownloadURL()
            .then(url=>{
                let user  = firebase.auth().currentUser;
                user.updateProfile({
                    photoURL: url
                })
                // Dispatch
                dispatch({type: actionTypes.UPDATE_PROFILE_PHOTO, photoURL: url})
            })
        }
        );
    }
}

export const getMyPhotos = (uid) =>{
    return (dispatch)=>{
        let myPhotos = [];
        firestore.collection("posts")
        .where("userId", "==", uid)
        .get()
        .then((snapshot)=>{
            snapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                myPhotos.push({id:doc.id, ...doc.data()});
            });
        }).then(()=>{
            dispatch({type: actionTypes.FETCH_MY_POSTS, myPhotos})
        })
    
    }
}