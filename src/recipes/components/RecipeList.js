import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <Container>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
      <Link to="/">...more</Link>
    </Container>
  );
};

export default RecipeList;
