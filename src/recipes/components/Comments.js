import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

const DUMMY_COMMENTS = [
  {
    user: "u2",
    commentDate: new Date(2020, 5, 19),
    comment:
      "I would give these a 4 out of 5. This is because, it took a decent amount of cocoa powder aside from the 4 tablespoons. I first waited 10 minutes for the mixture to thicken, I had to look up how to thicken truffle mixtures. I learned that I had to add more cocoa which I did. In the end it did work, and for some reason it tasted like it had a hint of coconut even though none was added. The truffles tasted magnificent, however it also tasted like those store bought cans of frosting. It was delicious and well worth the wait! Definately would try again.",
    avatar: "https://image.flaticon.com/icons/png/512/709/709722.png",
  },
  {
    user: "u5",
    commentDate: new Date(2021, 3, 24),
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut lectus arcu bibendum at varius vel pharetra vel.",
    avatar: "https://image.flaticon.com/icons/png/512/709/709722.png",
  },
];

const Comments = () => {
  return (
    <Container>
      <ListGroup className="mx-5">
        {DUMMY_COMMENTS.map((comment) => (
          <ListGroup.Item>
            <Row>
              <Col md={2}>
                <Image
                  className="d-block"
                  src={comment.avatar}
                  alt={comment.user}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                  }}
                />
                {comment.user}
                <br />
                {comment.commentDate.toLocaleDateString()}
              </Col>
              <Col md={10}>{comment.comment}</Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Comments;
