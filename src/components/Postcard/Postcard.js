import React from "react";
import {Grid, CardContent, Card, CardHeader,CardActions, CardMedia, Avatar, Typography, TextField, Button} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import moment from "moment";
// import post from "../../assets/images/post.jpg";
import style from "./PostCard.module.css";
const PostCard = ({name, caption, image, timestamp}) => {
  return (
      <Grid item component={Card} md={5} xs={11} className={style.card}>
        <CardHeader
          avatar={<Avatar aria-label="username">R</Avatar>}
          title={name}
          subheader={timestamp? moment(timestamp.toDate()).calendar() : "Loading..."}
        />
        <CardContent className={style.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
          {caption}
          </Typography>
          <CardMedia
          className={style.media}
          component="img"
          image={image}
          title="Paella dish"
        />
        </CardContent>
        <CardActions disableSpacing>
        <form className={style.form}>
        <TextField type="text" className={style.textField} label="Write a Comment" size="small" variant="outlined"/>
        <Button className={style.post} type="submit" color="primary" size="small"><SendIcon/></Button>
        </form>
        </CardActions>
      </Grid>
  );
};

export default PostCard;
