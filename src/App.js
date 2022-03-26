import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import SideBar from "./components/Sidebar";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
const AuthorsPage = React.lazy(() => import("./pages/authors-page"));
const FavoriteAuthorsPage = React.lazy(() =>
  import("./pages/favorite-author-page")
);

function App() {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Layout.Content
          style={{ margin: "24px 16px 20px", overflow: "initial" }}
        >
          <Switch>
            <React.Suspense fallback={<p>Loading...</p>}>
              <Route exact path="/">
                <Redirect to="/authors" />
              </Route>
              <Route exact path="/authors">
                <AuthorsPage />
              </Route>
              <Route exact path="/favorite-authors">
                <FavoriteAuthorsPage />
              </Route>
            </React.Suspense>
          </Switch>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
