import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CheckerBoard } from "controllers";

import { landing, profile, checkerboard, users } from "./paths";
import { Landing, Profile, Checkerboard, Users } from "views";

export default function() {
  return (
    <Switch>
      <CheckerBoard>
        <Route exact path={landing()} render={() => <Landing />} />
        <Route exact path={profile()} render={() => <Profile />} />
        <Route exact path={checkerboard()} render={() => <Checkerboard />} />
        <Route exact path={users()} render={() => <Users />} />
        <Redirect exact to={landing()} />
      </CheckerBoard>
    </Switch>
  );
}
