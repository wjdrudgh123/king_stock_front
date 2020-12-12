import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./header/Nav";
import Home from "../components/home/Home";
const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
