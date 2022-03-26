import "./App.css";
import "antd/dist/antd.css";
import SideBar from "./components/Sidebar";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthorsPage from "./pages/authors-page";
import FavoriteAuthorsPage from "./pages/favorite-author-page";

function App() {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Layout.Content
          style={{ margin: "24px 16px 20px", overflow: "initial" }}
        >
          <Switch>
            <Route exact path="/">
              <Redirect to="/authors" />
            </Route>
            <Route exact path="/authors">
              <AuthorsPage />
            </Route>
            <Route exact path="/favorite-authors">
              <FavoriteAuthorsPage />
            </Route>
          </Switch>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
