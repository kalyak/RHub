import React from "react";
import { Button, Form } from "react-bootstrap";
import FormIngredientsSelections from "./Sections_FormIngredientsSelections";
import FormInstructions from "./Sections_FormInstructions";
// import FormInstructions from "./FormInstructions";

const RecipeForm = ({ recipe = {} }) => {
  // console.log(recipe);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("done");
  };
  return (
    <Form onSubmit={(event) => submitHandler(event)}>
      <Form.Group className="mb-3" controlId="formRecipeTitle">
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control
          type="textarea"
          alt="Recipe name input"
          placeholder="Enter the name of the dish"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRecipeBrief">
        <Form.Label>Recipe Brief</Form.Label>
        <Form.Control
          type="textarea"
          alt="Recipe brief input"
          placeholder="Give a 1 liner for your dish"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRecipeDescription">
        <Form.Label>Recipe Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Give a write up of your dish"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRecipeImage">
        <Form.Label>Recipe Image</Form.Label>
        <Form.Control type="file" alt="Recipe image file picker" />
      </Form.Group>
      <FormIngredientsSelections />
      <FormInstructions />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default RecipeForm;
