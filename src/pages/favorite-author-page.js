import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import FavoriteAuthors from "../container/favoriteAuthors";

export default function FavoriteAuthorsPage() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <FavoriteAuthors />
        </Route>
      </Switch>
    </>
  );
}
