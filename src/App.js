import React from "react";
import Signup from "./containers/Signup/Signup";
import Signin from "./containers/Signin/Signin";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
const App = () => {
  return (
    <div className={style.main}>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
