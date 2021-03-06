import React, { useEffect } from "react";
import {PostCard, ImageUpload } from "../../components";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./Home.module.css";
const Home = ({ fetchPosts, fetchedPosts }) => {
  useEffect(() => {
    fetchPosts();
    // return ()=>{
    //   actionCreator.unsubscribePosts()
    // }
  }, [fetchPosts]);
  return (
    <div>
      <div className={style.container}>
        <Grid container justify="center" className={style.main}>
          <ImageUpload />
          {fetchedPosts ? (
            fetchedPosts.map((data) => (
              <PostCard
                key={data.id}
                postId={data.id}
                name={data.name}
                caption={data.caption}
                image={data.imageUrl}
                timestamp={data.timestamp}
                photoURL={data.photoURL}
              />
            ))
          ) : (
            <Typography variant="body2">Nothing to show Here</Typography>
          )}
        </Grid>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    fetchedPosts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(actionCreator.fetchPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
