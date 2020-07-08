import React from "react";
import Signup from "./containers/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
const App = () => {
  return (
    <div className={style.main}>
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
