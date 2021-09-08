import React from "react";
import { Container } from "react-bootstrap";
import RecipeForm from "../components/RecipeFormComponents/RecipeForm";

const NewRecipePage = () => {
  return (
    <Container>
      <h3>New Recipe</h3>
      <RecipeForm />
    </Container>
  );
};

export default NewRecipePage;
