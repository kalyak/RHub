import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const CommentForm = () => {
  return (
    <Container className="mb-3">
      <Form>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Have you tried this recipe? Comment here on how it turned out!"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default CommentForm;
