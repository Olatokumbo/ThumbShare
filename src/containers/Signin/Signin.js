import React, {useEffect} from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import logo from "../../assets/images/share.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions"; 
import style from "./Signin.module.css";
const Signin = ({signin, error, reset}) =>{
  useEffect(()=>{
    return () =>{
      reset();
    }
  }, [reset])
  const signinForm = (e) =>{
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    signin({email, password});
  }
    return(
        <div className={style.main}>
        <div className={style.left}>
        </div>
        <div className={style.right}>
        <div className={style.brand}>
        <img className={style.logo} src={logo} alt="logo.png" />
        <Typography variant="h6">ThumbShare</Typography>
        </div>
        <form className={style.form} onSubmit={signinForm}>
          <TextField name="email" type="text" className={style.input} variant="outlined" label="Email" size="small"/>
          <TextField name="password" type="password" className={style.input} variant="outlined" label="Password" size="small"/>
          <Button type="submit" className={style.signin} variant="contained" size="small" color="primary">Sign In</Button>
          <Typography color="error" variant="body2">{error}</Typography>
          <Typography variant="body2">Have an Account already? 
          <Link to="/signup" style={{textDecoration: "none"}}> Sign Up</Link>
          </Typography>
          </form>
        </div>
      </div>
    )
}

const mapStateToProps = (state) =>{
  return{
    error: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) =>{
  return{
    signin: (credentials) => dispatch(actionCreator.startSignin(credentials)),
    reset: () => dispatch(actionCreator.reset())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);