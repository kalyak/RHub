import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RecipeCarousel from "../components/RecipeCarousel";
import RecipeList from "../components/RecipeList";

const DUMMY_RECIPE = [
  {
    id: "r1",
    title: "first recipe",
    description: "A very yummy dish you have to try it yourself!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/619px-Placeholder_view_vector.svg.png",
    tags: ["quick & easy", "appetizers"],
    user: "u1",
    updateDate: new Date(),
    rating: 3.5,
  },
  {
    id: "r2",
    title: "seond recipe",
    description: "a VERY yummy dish you have to try it yourself!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/619px-Placeholder_view_vector.svg.png",
    tags: ["mains", "chicken", "carb-free"],
    user: "u1",
    updateDate: new Date(),
    rating: 5.0,
  },
  {
    id: "r3",
    title: "third recipe",
    description: "a very YUMMY dish you have to try it yourself!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/619px-Placeholder_view_vector.svg.png",
    tags: ["drinks", "cocktails", "alcoholic"],
    user: "u2",
    updateDate: new Date(),
    rating: 3.5,
  },
  {
    id: "r4",
    title: "fourth recipe",
    description: "a very yummy DISH you have to try it yourself!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/619px-Placeholder_view_vector.svg.png",
    tags: ["salads", "healthy", "carb-free"],
    user: "u3",
    updateDate: new Date(),
    rating: 4.5,
  },
  {
    id: "r5",
    title: "fifth recipe",
    description: "a very yummy dish YOU have to try it yourself!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/619px-Placeholder_view_vector.svg.png",
    tags: ["cakes", "healthy", "egg-free"],
    user: "u5",
    updateDate: new Date(),
    rating: 4.2,
  },
];

const RecipeHome = () => {
  return (
    <React.Fragment>
      <Container>
        <h1>Top Rated</h1>
        <RecipeCarousel recipes={DUMMY_RECIPE} />
      </Container>
      <hr />
      <Row>
        <Col className="m-3">
          <h1>Latest Recipes</h1>
          <RecipeList recipes={DUMMY_RECIPE} />
        </Col>
        <Col className="m-3">
          <h1>Categories</h1>
          <RecipeCarousel recipes={DUMMY_RECIPE} />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default RecipeHome;
