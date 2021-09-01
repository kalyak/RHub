import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NewRecipe from "./recipes/pages/NewRecipe";
import RecipeHome from "./recipes/pages/RecipeHome";
import RecipePage from "./recipes/pages/RecipePage";
import Layout from "./shared/components/Layout";
import AuthPage from "./users/pages/AuthPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <RecipeHome />
          </Route>
          <Route path="/recipes/new" exact>
            <NewRecipe />
          </Route>
          <Route path="/recipes/:rid">
            <RecipePage />
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
