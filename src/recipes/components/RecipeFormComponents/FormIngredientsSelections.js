import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

// const DUMMY_INGREDIENTS = [
//   { id: "chocolate", ingredientName: "Chocolate" },
//   { id: "milk", ingredientName: "Milk" },
//   { id: "sugar", ingredientName: "Sugar" },
//   { id: "water", ingredientName: "Water" },
//   { id: "tea", ingredientName: "Tea" },
// ];

const FormIngredientsSelections = ({
  initialIngredients = [
    {
      amount: 0,
      unit: "",
      ingredientName: "",
    },
  ],
}) => {
  const [ingredientsList, setIngredientsList] = useState(initialIngredients);

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
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Ingredients</Form.Label>
      {ingredientsList.map((ingredient, index) => (
        <Row
          name="ingredientRow"
          key={index}
          className="align-items-center mb-1"
        >
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
              <option value="sugar">Sugar</option>
              <option value="water">Water</option>
              <option value="tea">Tea</option>
            </Form.Select>
          </Form.Group>
          <Col md="auto">
            <Button
              name="removeIngredientBtn"
              onClick={() => removeIngredientHandler(index)}
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
                Add another ingredient
              </Button>
            </Col>
          )}
        </Row>
      ))}
      {/* {JSON.stringify(ingredientsList)} */}
    </Form.Group>
  );
};

export default FormIngredientsSelections;
