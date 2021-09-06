import React from "react";
import { Container, Form } from "react-bootstrap";
import FormIngredientsSelections from "./FormIngredientsSelections";

const DUMMY_RECIPE = {
  id: "r1",
  title: "Brazilian Chocolate Fudge Truffles (Brigadeiros)",
  brief: "A very yummy dish you have to try it yourself!",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at ultrices mi tempus imperdiet nulla. Convallis a cras semper auctor neque vitae.",
  image:
    "https://www.thespruceeats.com/thmb/kV-YxDtWwLPHC9HDEqiF3JU-5Q8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-84515588-579198163df78c1734f12b1e.jpg",
  tags: ["quick & easy", "appetizers"],
  user: "u1",
  updateDate: new Date(),
  rating: 4.8,
  noOfRatings: 536,
  noOfComments: 209,
  ingredientsList: [
    {
      ingredientsFor: "Brigadeiros",
      ingredients: [
        {
          ingredientName: "sweetened condensed milk",
          amount: 14,
          unit: "ounce",
        },
        { ingredientName: "cocoa powder", amount: 4, unit: "tablespoon" },
        { ingredientName: "salt", amount: 1 / 4, unit: "teaspoon" },
        { ingredientName: "butter", amount: 3, unit: "tablespoon" },
        { ingredientName: "vanilla", amount: 1, unit: "teaspoon" },
        { ingredientName: "chocolate sprinkles", amount: null, unit: null },
      ],
    },
  ],
  instructionsList: [
    {
      instructionsFor: "Brigadeiros",
      instructions: [
        "Pour the condensed milk into a pot. Stir in the cocoa powder and the salt.",
        "Cook, stirring constantly, over low heat. Keep the mixture barely at a boil to prevent burning and sticking.",
        "Cook for 10 to 15 minutes, stirring constantly until the mixture becomes very thick and shiny and starts to pull away from the bottom and sides of the pan.",
        "Remove from the heat and stir in the butter and vanilla.",
        "Chill in the refrigerator for 20 to 30 minutes. With buttered hands, roll the mixture into 1-inch balls.",
        "Roll each ball in the chocolate sprinkles and place in a paper cup.",
        "Chill until ready to serve.",
      ],
    },
  ],
};

const RecipeForm = () => {
  return (
    <Container>
      <h3>New Recipe</h3>
      <Form>
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
      </Form>
    </Container>
  );
};

export default RecipeForm;
