import React from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import logo from "../../assets/images/share.png";
import style from "./Signup.module.css";
const Signup = () => {
  return (
    <div className={style.main}>
      <div className={style.left}>
      </div>
      <div className={style.right}>
      <img className={style.logo} src={logo} alt="logo.png" />
      <form className={style.form}>
        <div className={style.name}>
        <TextField className={style.input} variant="outlined" label="First Name" size="small"/>
        <TextField className={style.input} variant="outlined" label="Last Name" size="small"/>
        </div>
        <TextField className={style.input} variant="outlined" label="Email" size="small"/>
        <TextField className={style.input} variant="outlined" label="Password" size="small"/>
        <Button type="submit" className={style.signup} variant="contained" size="small" color="primary">Sign up</Button>
        <Typography variant="body2">Have an Account already? Sign In</Typography>
        </form>
      </div>
    </div>
  );
};

export default Signup;
