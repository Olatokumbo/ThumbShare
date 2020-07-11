import React, {useState} from "react";
import { TextField, Button, Grid, Card, CardContent } from "@material-ui/core";
// import {connect} from "react-redux";
import style from "./ImageUpload.module.css";

const ImageUpload = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(""); 
  const uploadForm = (e) =>{
    e.preventDefault();
  }
  return (
    <Grid item component={Card} md={5} xs={11} className={style.card}>
      <CardContent>
      <form className={style.form} onSubmit={uploadForm}>
      <TextField type="text" label="Caption" variant="outlined" size="small" onChange={(e)=>setCaption(e.target.value)}/>
      <div className={style.upload}>
      <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>setImage(e.target.files[0])}/>
      <Button type="submit" variant="contained" color="primary">Upload</Button>
      </div>
      </form>
      </CardContent>
    </Grid>
  );
};

export default ImageUpload;
