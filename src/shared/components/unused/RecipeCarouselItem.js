import React from "react";
import { Carousel, Image } from "react-bootstrap";

// const DUMMY

const RecipeCarouselItem = (props) => {
  return (
    <Carousel.Item {...props}>
      <Image
        className="d-block w-100"
        src={props.recipe.image}
        alt={props.recipe.title}
        style={{
          height: "240px",
          width: "309px",
          objectFit: "cover",
        }}
      />
      <Carousel.Caption>
        <h3>{props.recipe.title}</h3>
        <p>{props.recipe.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};
export default RecipeCarouselItem;
