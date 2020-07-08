import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CheckerBoard as CheckerboardContext, UserContext } from "controllers";

import { landing, profile, grid, grids, users } from "./paths";
import {
  Landing,
  Profile,
  Checkerboard,
  CheckerboardsList,
  Users,
} from "views";

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
        path={grid()}
        render={() => (
          <CheckerboardContext>
            <Checkerboard />
          </CheckerboardContext>
        )}
      />
      <Route path={grids()} render={() => <CheckerboardsList />} />
      <AdminRoute exact path={users()} render={() => <Users />} />
      <Redirect exact to={landing()} />
    </Switch>
  );
}
