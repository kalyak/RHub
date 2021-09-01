import React from "react";
import { Badge } from "react-bootstrap";

const RecipeTags = ({ tags }) => {
  return (
    <small>
      {tags.map((tag) => (
        <Badge pill bg="info" text="dark" key={tag}>
          {tag}
        </Badge>
      ))}
    </small>
  );
};

export default RecipeTags;
