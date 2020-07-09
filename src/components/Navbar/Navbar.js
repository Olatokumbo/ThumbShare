import React, {useState} from "react";
import {Toolbar, AppBar, Typography, Menu, MenuItem } from "@material-ui/core";
import {Link} from "react-router-dom"; 
import logo from "../../assets/images/share.png";
import profile from "../../assets/images/default.jpg";
import style from "./Navbar.module.css";
const Navbar = () =>{
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
              <img className={style.logo} src={logo} alt="logo" />
            </Link>
            { /*<input
              className={style.searchInput}
              placeholder="Search in Convey..."
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
                {"David King"}
              </Typography>
              <img
                className={style.profileImage}
                src={profile}
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
              <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    )
}
export default Navbar;