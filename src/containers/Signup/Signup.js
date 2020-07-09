import React from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import logo from "../../assets/images/share.png";
import {Link} from "react-router-dom";
import style from "./Signup.module.css";
const Signup = () => {
  return (
    <div className={style.main}>
      <div className={style.left}>
      </div>
      <div className={style.right}>
      <div className={style.brand}>
      <img className={style.logo} src={logo} alt="logo.png" />
      <Typography variant="h6">ThumbShare</Typography>
      </div>
      <form className={style.form}>
        <div className={style.name}>
        <TextField className={style.input} variant="outlined" label="First Name" size="small"/>
        <TextField className={style.input} variant="outlined" label="Last Name" size="small"/>
        </div>
        <TextField className={style.input} variant="outlined" label="Email" size="small"/>
        <TextField className={style.input} variant="outlined" label="Password" size="small"/>
        <Button type="submit" className={style.signup} variant="contained" size="small" color="primary">Sign up</Button>
        <Typography variant="body2">Have an Account already?
        <Link to="/" style={{textDecoration: "none"}}> Sign In</Link>
         </Typography>
        </form>
      </div>
    </div>
  );
};

export default Signup;
