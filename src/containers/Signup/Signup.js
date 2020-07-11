import React, {useEffect} from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import logo from "../../assets/images/share.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./Signup.module.css";
const Signup = ({signup, error, reset}) => {
  useEffect(()=>{
    return () =>{
      reset();
    }
  }, [reset])
  const signupForm = (e) =>{
    e.preventDefault();
    let fName = e.target.elements.fName.value;
    let lName = e.target.elements.lName.value;
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    signup({fName, lName, email, password});
  }
  return (
    <div className={style.main}>
      <div className={style.left}>
      </div>
      <div className={style.right}>
      <div className={style.brand}>
      <img className={style.logo} src={logo} alt="logo.png" />
      <Typography variant="h6">ThumbShare</Typography>
      </div>
      <form className={style.form} onSubmit={signupForm}>
        <div className={style.name}>
        <TextField name="fName" type="text" className={style.input} variant="outlined" label="First Name" size="small"/>
        <TextField name="lName" type="text" className={style.input} variant="outlined" label="Last Name" size="small"/>
        </div>
        <TextField name="email" type="email" className={style.input} variant="outlined" label="Email" size="small"/>
        <TextField name="password" type="password" className={style.input} variant="outlined" label="Password" size="small"/>
        <Button type="submit" className={style.signup} variant="contained" size="small" color="primary">Sign up</Button>
        <Typography color="error" variant="body2">{error}</Typography>
        <Typography variant="body2">Have an Account already?
        <Link to="/" style={{textDecoration: "none"}}> Sign In</Link>
         </Typography>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    error: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) =>{
  return{
      signup: (credentials)=> dispatch(actionCreator.startSignup(credentials)),
      reset: () => dispatch(actionCreator.reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
