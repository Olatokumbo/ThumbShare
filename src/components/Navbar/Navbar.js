import React, {useState} from "react";
import {Toolbar, AppBar, Typography, Menu, MenuItem, Avatar } from "@material-ui/core";
import {Link} from "react-router-dom"; 
import logo from "../../assets/images/share.png";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import * as actionCreator from "../../store/actions";
import style from "./Navbar.module.css";
const Navbar = ({logout, displayName, photoURL}) =>{
  const history = useHistory()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <AppBar position="sticky" className={style.container}>
        <Toolbar variant="dense" className={style.toolbar}>
          <div className={style.brand}>
            <Link style={{ textDecoration: "none" }} to="/home">
              <Avatar src={logo} />
            </Link>
            { /*<input
              className={style.searchInput}
              placeholder="Search in ThumbShare..."
            /> */}
          <Typography variant="h5" className={style.name}>ThumbShare</Typography>
          </div>
          <div className={style.utility}>

            <div className={style.profile}>
              <Typography
                className={style.profileName}
                variant="body2"
                color="inherit"
              >
                {displayName}
              </Typography>
              <img
                className={style.profileImage}
                src={photoURL}
                alt="profile"
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <MenuItem onClick={() => history.push('/profile')}>Profile</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    )
}

const mapStateToProps = (state) =>{
  return{
    displayName: state.auth.displayName,
    photoURL: state.auth.photoURL
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    logout: () => dispatch(actionCreator.startSignout()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);