import React from "react";
import { ListGroup } from "react-bootstrap";

const IngredientsList = ({ ingredientsList }) => {
  return (
    <React.Fragment>
      {ingredientsList.map((section, index) => (
        <ListGroup variant="flush" key={index}>
          <h3>Ingredients for {section.ingredientsFor}</h3>
          {section.ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index}>
              {ingredient.amount && `${ingredient.amount} ${ingredient.unit} `}
              {ingredient.ingredientName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ))}
    </React.Fragment>
  );
};

export default IngredientsList;
