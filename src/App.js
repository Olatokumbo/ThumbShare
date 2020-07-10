import React from "react";
import Signup from "./containers/Signup/Signup";
import Signin from "./containers/Signin/Signin";
import Home from "./containers/Home/Home";
import {PrivateRoute, PublicRoute} from "./routers";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import style from "./App.module.css";
const App = () => {
  return (
    <div className={style.main}>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Signin} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
