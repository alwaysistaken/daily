import React from "react";
import { Route, Switch } from "react-router";
import A from "./views/A";
import B from "./views/B";

const RouteComp = () => (
  <Switch>
    <Route path="/a" component={A}></Route>
    <Route path="/B" component={B}></Route>
  </Switch>
);

export default RouteComp;
