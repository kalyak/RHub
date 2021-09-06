import React, { useState } from "react";
import { Button, Card, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const RecipeCarousel = ({ recipes }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };
  return (
    <Carousel className="border border-5">
      {recipes.map((recipe) => {
        const date = recipe.updateDate.toLocaleDateString();
        return (
          // <RecipeCarouselItem key={recipe.id} recipe={recipe} />
          <Carousel.Item
            key={recipe.id}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <Image
              className="d-block w-100"
              src={recipe.image}
              alt={recipe.title}
              style={{
                height: "300px",
                objectFit: "cover",
              }}
            />
            {!hovered ? (
              <Carousel.Caption
                className="px-1 bg-light text-dark rounded"
                style={{ opacity: "0.7" }}
              >
                <h3 className="text-capitalize">{recipe.title}</h3>
                <p>{recipe.description}</p>
              </Carousel.Caption>
            ) : (
              <Carousel.Caption
                as={Card}
                className=" pb-0 bg-light text-dark rounded"
              >
                <Card.Title className="text-capitalize justify-content-center">
                  {recipe.title}
                </Card.Title>
                <Card.Text
                  style={{
                    overflowY: "auto",
                    textOverflow: "ellipsis",
                  }}
                >
                  <StarRating rating={recipe.rating} /> <br />
                  {recipe.description}
                  <br />
                  <Link to={`/recipes/${recipe.id}`}>
                    <Button variant="primary" size="sm">
                      Show More
                    </Button>
                  </Link>
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Updated on {date}</small>
                  {/* {recipe.tags.length !== 0 && <RecipeTags tags={recipe.tags} />} */}
                </Card.Footer>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default RecipeCarousel;
