import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import EditRecipePage from "./recipes/pages/EditRecipePage";
import NewRecipePage from "./recipes/pages/NewRecipePage";
import RecipeHomePage from "./recipes/pages/RecipeHomePage";
import RecipePage from "./recipes/pages/RecipePage";
import Layout from "./shared/components/Layout";
import AuthPage from "./users/pages/AuthPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <RecipeHomePage />
          </Route>
          <Route path="/recipes/new" exact>
            <NewRecipePage />
          </Route>
          <Route path="/recipes/:rid" exact>
            <RecipePage />
          </Route>
          <Route path="/recipes/:rid/edit" exact>
            <EditRecipePage />
          </Route>
          <Route path="/auth" exact>
            <AuthPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
