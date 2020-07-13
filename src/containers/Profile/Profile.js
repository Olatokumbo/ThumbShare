import React from "react";
import { Card, CardContent, Grid, Avatar, Typography, IconButton } from "@material-ui/core";
import {connect} from "react-redux";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import * as actionCreator from "../../store/actions";
import style from "./Profile.module.css";
const Profile = ({photoURL, updateProfilePhoto}) => {
  return (
    <div>
      <Grid container justify="center">
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
            <Typography className={style.displayName} variant="h5" gutterBottom>David King</Typography>
            <Typography className={style.displayName} variant="body1">davidking@gmail.com</Typography>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    photoURL: state.auth.photoURL
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      updateProfilePhoto: (photo) => dispatch(actionCreator.updateProfilePhoto(photo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
