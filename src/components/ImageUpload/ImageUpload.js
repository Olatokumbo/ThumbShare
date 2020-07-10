import React from "react";
import { TextField, Button, Grid, Card, CardContent } from "@material-ui/core";
import style from "./ImageUpload.module.css";

const ImageUpload = () => {
  return (
    <Grid item component={Card} md={5} xs={11} className={style.card}>
      <CardContent>
      <form className={style.form}>
      <TextField type="text" label="Caption" variant="outlined" size="small"/>
      <div className={style.upload}>
      <input type="file"/>
      <Button type="submit" variant="contained" color="primary">Upload</Button>
      </div>
      </form>
      </CardContent>
    </Grid>
  );
};

export default ImageUpload;
