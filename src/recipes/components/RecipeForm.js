import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

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
  const [ingredientsList, setIngredientsList] = useState([
    {
      amount: 0,
      unit: "",
      ingredientName: "",
    },
  ]);

  const editIngredientHander = (event, index) => {
    const { id, value } = event.target;
    const newIngredientsList = [...ingredientsList];
    newIngredientsList[index][id] = value;
    setIngredientsList(newIngredientsList);
  };
  const addIngredientHandler = () => {
    setIngredientsList([
      ...ingredientsList,
      { amount: 0, unit: "", ingredientName: "" },
    ]);
  };

  const removeIngredientHandler = (index) => {
    const newIngredientsList = [...ingredientsList];
    newIngredientsList.splice(index, 1);
    setIngredientsList(newIngredientsList);
    console.log(newIngredientsList);
  };

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
        <Form.Label>Ingredients</Form.Label>
        {ingredientsList.map((ingredient, index) => (
          <Row name="ingredientRow" key={index} className="align-items-center">
            {/* <Col md="1"> */}
            <Form.Group as={Col} md="1" controlId="amount">
              <Form.Control
                type="number"
                placeholder="Amount"
                onChange={(event) => editIngredientHander(event, index)}
                value={ingredient.amount}
                min={0}
                step={0.01}
              />
            </Form.Group>
            {/* </Col> */}
            {/* <Col md="2"> */}
            <Form.Group as={Col} md="2" controlId="unit">
              <Form.Select
                onChange={(event) => editIngredientHander(event, index)}
                value={ingredient.unit}
              >
                <option value="" disabled hidden>
                  unit [Please select]
                </option>
                <option value="cup">cup</option>
                <option value="tbsp">tablespoon</option>
                <option value="tsp">fluid ounce</option>
                <option value="gram">gram</option>
                <option value="ml">ml</option>
              </Form.Select>
            </Form.Group>
            {/* </Col> */}
            {/* <Col md="4"> */}
            <Form.Group as={Col} md="4" controlId="ingredientName">
              <Form.Select
                onChange={(event) => editIngredientHander(event, index)}
                value={ingredient.ingredientName}
              >
                <option value="" disabled hidden>
                  ingredient [Please select]
                </option>
                <option value="chocolate">Chocolate</option>
                <option value="milk">Milk</option>
                <option value="i3">Sugar</option>
                <option value="i4">Water</option>
                <option value="i5">Tea</option>
              </Form.Select>
            </Form.Group>
            {/* </Col> */}
            <Col md="auto">
              <Button
                name="removeIngredientBtn"
                onClick={(index) => removeIngredientHandler(index)}
                variant="outline-danger"
                size="sm"
              >
                <i
                  className="bi bi-x-lg"
                  style={{ fontSize: "1rem", color: "red" }}
                />
                {/* X */}
              </Button>
            </Col>
            {index === ingredientsList.length - 1 && (
              <Col md="auto">
                <Button name="adddIngredientBtn" onClick={addIngredientHandler}>
                  Add another
                </Button>
              </Col>
            )}
          </Row>
        ))}
        {JSON.stringify(ingredientsList)}
      </Form>
    </Container>
  );
};

export default RecipeForm;
