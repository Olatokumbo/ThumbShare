import React, {useState} from "react";
import { TextField, Button, Grid, Card, CardContent, LinearProgress } from "@material-ui/core";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions"
import style from "./ImageUpload.module.css";

const ImageUpload = ({displayName, getProgress, upload}) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null); 
  const uploadForm = (e) =>{
    e.preventDefault();
    // console.log({displayName, caption, image})
    upload({displayName, caption, image});
    e.target.elements.caption.value="";
    e.target.elements.image.value=null;
  }
  return (
    <Grid item component={Card} md={4} xs={11} className={style.card}>
      <CardContent>
      <form className={style.form} onSubmit={uploadForm}>
      <TextField type="text" name="caption" label="Caption" variant="outlined" size="small" onChange={(e)=>setCaption(e.target.value)} required/>
      <LinearProgress variant="determinate" value={getProgress}/>
      <div className={style.upload}>
      <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>setImage(e.target.files[0])} required/>
      <Button type="submit" variant="contained" color="primary">Upload</Button>
      </div>
      </form>
      </CardContent>
    </Grid>
  );
};
const mapStateToProps = (state) =>{
  return{
    displayName: state.auth.displayName,
    getProgress: state.posts.progress
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      upload: (data) => dispatch(actionCreators.addPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
