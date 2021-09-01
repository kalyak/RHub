import React from "react";
import { Col, Image, Ratio, Row } from "react-bootstrap";
import RecipeTags from "./RecipeTags";
import StarRating from "./StarRating";

const RecipeCard = ({ recipe }) => {
  return (
    <Row className="my-3 p-2 border">
      <Col>
        <Ratio aspectRatio="4x3">
          <Image
            className="d-block w-100"
            src={recipe.image}
            alt={recipe.title}
            style={{
              width: "100px",
              // width: "309px",
              objectFit: "cover",
            }}
          />
        </Ratio>
        <StarRating rating={recipe.rating} />
      </Col>
      <Col>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        {recipe.tags.length !== 0 && <RecipeTags tags={recipe.tags} />}
      </Col>
    </Row>
  );
};

export default RecipeCard;
