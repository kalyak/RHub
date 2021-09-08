import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RecipeForm from "../components/RecipeFormComponents/RecipeForm";

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

const EditRecipePage = () => {
  const params = useParams().rid;
  console.log(params);

  return (
    <Container>
      <h3>Edit Recipe</h3>
      <RecipeForm recipe={DUMMY_RECIPE} />
    </Container>
  );
};

export default EditRecipePage;
