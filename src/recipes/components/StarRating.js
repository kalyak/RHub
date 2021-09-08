import React, { Fragment } from "react";

const StarRating = ({ rating }) => {
  return (
    <Fragment>
      {Math.floor(rating) !== 0 &&
        [...Array(Math.floor(rating))].map((number, index) => (
          <i className="bi bi-star-fill" key={index} />
        ))}
      {rating % 1 !== 0 && <i className="bi bi-star-half" />}
      {5 - Math.ceil(rating) !== 0 &&
        [...Array(5 - Math.ceil(rating))].map((number, index) => (
          <i className="bi bi-star" key={index} />
        ))}
    </Fragment>
  );
};

export default StarRating;
