import React from "react";
import { Card, CardContent, Grid, Avatar, Typography, IconButton } from "@material-ui/core";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import style from "./Profile.module.css";
const Profile = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item component={Card} md={5} xs={11}>
          <CardContent className={style.cardContent}>
            <div className={style.profileImage}>
                <Avatar className={style.avatar}>H</Avatar>
                <input accept="image/*" style={{ display: 'none' }} id="raised-button-file" type="file"/>
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
export default Profile;
