import React from "react";
import { Navbar, PostCard, ImageUpload} from "../../components";
import { Grid } from "@material-ui/core";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <Grid container justify="center" className={style.main} >
        <ImageUpload/>
          <PostCard />
          <PostCard />
          <PostCard />
        </Grid>
      </div>
    </div>
  );
};
export default Home;
