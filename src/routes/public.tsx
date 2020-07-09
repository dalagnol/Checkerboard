import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { signin, signup } from "./paths";
import { SignIn, SignUp } from "views";

export default function () {
  return (
    <Switch>
      <Route exact path={signin()} render={() => <SignIn />} />
      <Route exact path={signup()} render={() => <SignUp />} />
      <Redirect to={signin()} />
    </Switch>
  );
}
