import firebase, {storage} from "../../firebase/firebase";
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