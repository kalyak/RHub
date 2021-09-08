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

// const DUMMY_INSTRUCTIONS = [
//   {
//     instructionsFor: "Brigadeiros",
//     instructions: [
//       "Pour the condensed milk into a pot. Stir in the cocoa powder and the salt.",
//       "Cook, stirring constantly, over low heat. Keep the mixture barely at a boil to prevent burning and sticking.",
//       "Cook for 10 to 15 minutes, stirring constantly until the mixture becomes very thick and shiny and starts to pull away from the bottom and sides of the pan.",
//       "Remove from the heat and stir in the butter and vanilla.",
//       "Chill in the refrigerator for 20 to 30 minutes. With buttered hands, roll the mixture into 1-inch balls.",
//       "Roll each ball in the chocolate sprinkles and place in a paper cup.",
//       "Chill until ready to serve.",
//     ],
//   },
// ];

const FormInstructions = ({ initialInstructions = [""] }) => {
  const [instructionsList, setInstructions] = useState(initialInstructions);

  const editInstructionhandler = (event, index) => {
    const { value } = event.target;
    const newInstructionsList = [...instructionsList];
    newInstructionsList[index] = value;
    setInstructions(newInstructionsList);
  };
  const addInstructionHandler = () => {
    setInstructions([...instructionsList, ""]);
  };

  const removeInstructionHandler = (index) => {
    const newInstructionsList = [...instructionsList];
    newInstructionsList.splice(index, 1);
    setInstructions(newInstructionsList);
  };

  return (
    <Form.Group className="mb-5">
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
              name="removeInstructionBtn"
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
              <Button name="adddInstructionBtn" onClick={addInstructionHandler}>
                New step
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
