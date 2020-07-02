import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { login } from "./paths";
import { Login } from "views";

export default function() {
  return (
    <Switch>
      <Route exact path={login()} render={() => <Login />} />
      <Redirect exact to={login()} />
    </Switch>
  );
}
