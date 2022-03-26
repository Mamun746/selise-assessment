import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Authors from "../container/authors";
export default function AuthorsPage() {
  const { path } = useRouteMatch();
return (
  <>
    <Switch>
      <Route exact path={path}>
        <Authors />
      </Route>
    </Switch>
  </>
);
}
