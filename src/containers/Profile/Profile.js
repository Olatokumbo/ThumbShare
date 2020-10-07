import React, {useEffect} from "react";
import { Card, CardContent, Grid, Avatar, Typography, IconButton } from "@material-ui/core";
import {connect} from "react-redux";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MyPhoto from "../../components/MyPhoto/MyPhoto";
import * as actionCreator from "../../store/actions";
import style from "./Profile.module.css";
const Profile = ({photoURL, updateProfilePhoto, displayName, email, getMyPhotos, uid, photos}) => {
  useEffect(()=>{
  getMyPhotos(uid)  
  }, [getMyPhotos, uid])
  return (
    <div>
      <Grid container alignItems="center" direction="column" className={style.main}>
        <Grid item component={Card} md={5} xs={11} className={style.card}>
          <CardContent className={style.cardContent}>
            <div className={style.profileImage}>
                <Avatar className={style.avatar}src={photoURL}/>
                <input accept="image/*" style={{ display: 'none' }} id="raised-button-file" type="file" onChange={(e)=> updateProfilePhoto(e.target.files[0])}/>
                <label htmlFor="raised-button-file" style={{ display: 'contents' }}>
                <IconButton className={style.changeProfileButton} variant="raised" component="span"><PhotoCamera/></IconButton>
                </label> 
            </div>
            <div className={style.user}>
            <Typography className={style.displayName} variant="h5" gutterBottom>{displayName}</Typography>
            <Typography className={style.displayName} variant="body1">{email}</Typography>
            </div>
          </CardContent>
        </Grid>
        <Grid className={style.photoGrid}>
        {
          photos.map((data)=><MyPhoto key={data.id} imageUrl={data.imageUrl} />)
        }
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    email: state.auth.email,
    displayName: state.auth.displayName,
    photoURL: state.auth.photoURL,
    uid: state.auth.uid,
    photos: state.profile.myPhotos
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      updateProfilePhoto: (photo) => dispatch(actionCreator.updateProfilePhoto(photo)),
      getMyPhotos: (uid) => dispatch(actionCreator.getMyPhotos(uid))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
