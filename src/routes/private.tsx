import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CheckerBoard } from "controllers";

import { landing, profile } from "./paths";
import { Landing, Profile } from "views";

export default function() {
  return (
    <Switch>
      <CheckerBoard>
        <Route exact path={landing()} render={() => <Landing />} />
        <Route exact path={profile()} render={() => <Profile />} />
        <Redirect exact to={landing()} />
      </CheckerBoard>
    </Switch>
  );
}
