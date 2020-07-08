import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CheckerBoard, UserContext } from "controllers";

import { landing, profile, grid, users } from "./paths";
import { Landing, Profile, Checkerboard, Users } from "views";

interface Props {
  exact?: boolean;
  path: string;
  render: any;
}

const AdminRoute = (props: Props) => {
  const { user } = useContext(UserContext);

  return user && !user.type ? <Route {...props} /> : null;
};

export default function () {
  return (
    <Switch>
      <Route path={profile()} render={() => <Profile />} />
      <Route exact path={landing()} render={() => <Landing />} />
      <Route
        exact
        path={grid()}
        render={() => (
          <CheckerBoard>
            <Checkerboard />
          </CheckerBoard>
        )}
      />
      <AdminRoute exact path={users()} render={() => <Users />} />
      <Redirect exact to={landing()} />
    </Switch>
  );
}
