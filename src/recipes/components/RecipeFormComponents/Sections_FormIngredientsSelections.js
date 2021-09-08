import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

// const DUMMY_INGREDIENTS = [
//   {
//     ingredientsFor: "Brigadeiros",
//     ingredients: [
//       {
//         ingredientName: "sweetened condensed milk",
//         amount: 14,
//         unit: "ounce",
//       },
//       { ingredientName: "cocoa powder", amount: 4, unit: "tablespoon" },
//       { ingredientName: "salt", amount: 1 / 4, unit: "teaspoon" },
//       { ingredientName: "butter", amount: 3, unit: "tablespoon" },
//       { ingredientName: "vanilla", amount: 1, unit: "teaspoon" },
//       { ingredientName: "chocolate sprinkles", amount: null, unit: null },
//     ],
//   },
// ];

const FormIngredientsSelections = ({
  initialIngredients = [
    {
      ingredientsFor: "",
      ingredients: [
        {
          amount: 0,
          unit: "",
          ingredientName: "",
        },
      ],
    },
  ],
}) => {
  const [ingredientsList, setIngredientsList] = useState(initialIngredients);

  const editIngredientHander = (event, sectionIndex, index = null) => {
    const { id, value } = event.target;
    const newIngredientsList = [...ingredientsList];
    index === null
      ? (newIngredientsList[sectionIndex][id] = value)
      : (newIngredientsList[sectionIndex].ingredients[index][id] = value);
    setIngredientsList(newIngredientsList);
  };

  const addSectionHandler = () => {
    setIngredientsList([
      ...ingredientsList,
      {
        ingredientsFor: "",
        ingredients: [
          {
            amount: 0,
            unit: "",
            ingredientName: "",
          },
        ],
      },
    ]);
  };

  const removeSectionHandler = (sectionIndex) => {
    const newIngredientsList = [...ingredientsList];
    newIngredientsList.splice(sectionIndex, 1);
    setIngredientsList(newIngredientsList);
  };

  const addIngredientHandler = (sectionIndex) => {
    const newIngredientsList = [...ingredientsList];
    newIngredientsList[sectionIndex].ingredients.push({
      amount: 0,
      unit: "",
      ingredientName: "",
    });
    setIngredientsList(newIngredientsList);
  };

  const removeIngredientHandler = (sectionIndex, index) => {
    const newIngredientsList = [...ingredientsList];
    newIngredientsList[sectionIndex].ingredients.splice(index, 1);
    setIngredientsList(newIngredientsList);
  };

  return (
    <Form.Group className="mb-5">
      <Form.Label>Ingredients</Form.Label>
      {ingredientsList.map((section, sectionIndex) => {
        return (
          <Form.Group className="mb-3" key={sectionIndex}>
            <Form.Group as={Row} controlId="ingredientsFor">
              <Form.Label column sm="auto">
                Section
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  placeholder="Ingredients for..."
                  value={section.ingredientsFor}
                  onChange={(event) =>
                    editIngredientHander(event, sectionIndex)
                  }
                />
              </Col>
              {ingredientsList.length !== 1 && (
                <Col md="auto">
                  <Button
                    onClick={() => removeSectionHandler(sectionIndex)}
                    variant="outline-danger"
                    size="sm"
                  >
                    <i
                      className="bi bi-x-lg"
                      style={{ fontSize: "1rem", color: "red" }}
                    />
                  </Button>
                </Col>
              )}
              {sectionIndex === ingredientsList.length - 1 && (
                <Col md="auto">
                  <Button onClick={addSectionHandler}>
                    New ingredient section
                  </Button>
                </Col>
              )}
            </Form.Group>
            {section.ingredients.map((ingredient, index) => (
              <Row
                name="ingredientRow"
                key={index}
                className="align-items-center mb-1"
              >
                <Form.Group as={Col} md="1" controlId="amount">
                  <Form.Control
                    type="number"
                    placeholder="Amount"
                    onChange={(event) =>
                      editIngredientHander(event, sectionIndex, index)
                    }
                    value={ingredient.amount}
                    min={0}
                    step={0.01}
                  />
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="unit">
                  <Form.Select
                    onChange={(event) =>
                      editIngredientHander(event, sectionIndex, index)
                    }
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
                    onChange={(event) =>
                      editIngredientHander(event, sectionIndex, index)
                    }
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
                {section.ingredients.length !== 1 && (
                  <Col md="auto">
                    <Button
                      name="removeIngredientBtn"
                      onClick={() =>
                        removeIngredientHandler(sectionIndex, index)
                      }
                      variant="outline-danger"
                      size="sm"
                    >
                      <i
                        className="bi bi-x-lg"
                        style={{ fontSize: "1rem", color: "red" }}
                      />
                    </Button>
                  </Col>
                )}
                {index === section.ingredients.length - 1 && (
                  <Col md="auto">
                    <Button
                      name="adddIngredientBtn"
                      onClick={() => addIngredientHandler(sectionIndex)}
                    >
                      Add ingredient
                    </Button>
                  </Col>
                )}
              </Row>
            ))}
          </Form.Group>
        );
      })}
      {/* {JSON.stringify(ingredientsList)} */}
    </Form.Group>
  );
};

export default FormIngredientsSelections;
