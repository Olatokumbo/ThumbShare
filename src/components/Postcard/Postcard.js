import React, {useState, useEffect} from "react";
import {Grid, CardContent, Card, CardHeader,CardActions, CardMedia, Avatar, Typography, TextField, Button} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import moment from "moment";
import {connect} from "react-redux";
import firebase, {firestore} from "../../firebase/firebase"; 
import style from "./PostCard.module.css";
const PostCard = ({postId, name, caption, image, timestamp, user, photoURL}) => {
  const [comments, setComments] = useState([]); 
  const [comment, setComment] = useState("");
  const commentForm = (e) =>{
      e.preventDefault();
      firestore
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({
          text: comment,
          name: user,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      e.target.elements.comment.value = "";
  }
  useEffect(()=>{
    let unsubscribe;
    if(postId){
      unsubscribe =  firestore
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot)=>{
        setComments(snapshot.docs.map((doc)=> doc.data()))
      });
      return () =>{
        unsubscribe();
      }
  }}, [postId])
  return (
      <Grid item component={Card} md={5} xs={11} className={style.card}>
        <CardHeader
          avatar={<Avatar aria-label="username" src={photoURL}/>}
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
          title={caption}
        />
        </CardContent>
        <div className={style.comments}>
        {
          comments.map((data, index)=><Typography key={index} variant="body2"><strong>{data.name}</strong> {data.text}</Typography>)
        }
        </div>
        <CardActions disableSpacing>
        <form className={style.form} onSubmit={commentForm}>
        <TextField name="comment" type="text" className={style.textField} onChange={(e)=> setComment(e.target.value)} label="Write a Comment" size="small" variant="outlined"/>
        <Button className={style.post} type="submit" color="primary" size="small"><SendIcon/></Button>
        </form>
        </CardActions>
      </Grid>
  );
};

const mapStateToProps = (state) =>{
  return{
    user: state.auth.displayName
  }
}

export default connect(mapStateToProps)(PostCard);
