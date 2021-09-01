import React from "react";
import { ListGroup } from "react-bootstrap";

const IngredientsList = ({ ingredientsList }) => {
  return (
    <React.Fragment>
      {ingredientsList.map((section) => (
        <ListGroup variant="flush">
          <h3>Ingredients for {section.ingredientsFor}</h3>
          {section.ingredients.map((ingredient) => (
            <ListGroup.Item>
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
