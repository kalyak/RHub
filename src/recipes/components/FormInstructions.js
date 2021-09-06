import React from "react";
import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const FormInstructions = () => {
  const [instructionsList, setInstructions] = useState(["s"]);

  const editInstructionhandler = (event, index) => {
    const { value } = event.target;
    const newIngredientsList = [...instructionsList];
    newIngredientsList[index] = value;
    setInstructions(newIngredientsList);
  };
  const addInstructionHandler = () => {
    setInstructions([...instructionsList, ""]);
  };

  const removeInstructionHandler = (index) => {
    const newIngredientsList = [...instructionsList];
    newIngredientsList.splice(index, 1);
    setInstructions(newIngredientsList);
  };

  return (
    <Form.Group>
      <Form.Label>Instructions</Form.Label>
      {instructionsList.map((instruction, index) => (
        <Row name="instructionRow" key={index} className="align-items-center">
          <Col>
            <InputGroup>
              <InputGroup.Text lg={1}>{index + 1}.</InputGroup.Text>
              <FormControl
                as="textarea"
                rows={1}
                id={`instruction${index + 1}`}
                placeholder="Next step"
                value={instruction}
                onChange={(event) => editInstructionhandler(event, index)}
              ></FormControl>
            </InputGroup>
          </Col>
          <Col md="auto">
            <Button
              name="removeIngredientBtn"
              onClick={() => removeInstructionHandler(index)}
              variant="outline-danger"
              size="sm"
            >
              <i
                className="bi bi-x-lg"
                style={{ fontSize: "1rem", color: "red" }}
              />
              {/* X */}
            </Button>
          </Col>
          {index === instructionsList.length - 1 && (
            <Col md="auto">
              <Button name="adddIngredientBtn" onClick={addInstructionHandler}>
                Add another
              </Button>
            </Col>
          )}
        </Row>
      ))}
      {/* {JSON.stringify(instructionsList)} */}
    </Form.Group>
  );
};

export default FormInstructions;
