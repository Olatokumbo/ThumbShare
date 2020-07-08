import React from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import logo from "../../assets/images/share.png";
import {Link} from "react-router-dom";
import style from "./Signin.module.css";
const Signin = () =>{
    return(
        <div className={style.main}>
        <div className={style.left}>
        </div>
        <div className={style.right}>
        <div className={style.brand}>
        <img className={style.logo} src={logo} alt="logo.png" />
        <Typography variant="h6">ThumbVote</Typography>
        </div>
        <form className={style.form}>
          <TextField className={style.input} variant="outlined" label="Email" size="small"/>
          <TextField className={style.input} variant="outlined" label="Password" size="small"/>
          <Button type="submit" className={style.signin} variant="contained" size="small" color="primary">Sign In</Button>
          <Typography variant="body2">Have an Account already? 
          <Link to="/signup" style={{textDecoration: "none"}}> Sign Up</Link>
          </Typography>
          </form>
        </div>
      </div>
    )
}

export default Signin;