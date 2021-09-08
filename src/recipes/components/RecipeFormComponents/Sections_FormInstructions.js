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

const FormInstructions = ({
  initialInstructions = [{ instructionsFor: "", instructions: [""] }],
}) => {
  const [instructionsList, setInstructions] = useState(initialInstructions);

  const editInstructionhandler = (event, sectionIndex, index = null) => {
    const { id, value } = event.target;
    // console.log(sectionIndex, index, id, value);
    const newInstructionsList = [...instructionsList];
    index === null
      ? (newInstructionsList[sectionIndex][id] = value)
      : (newInstructionsList[sectionIndex][id][index] = value);
    // console.log(newInstructionsList);
    setInstructions(newInstructionsList);
  };

  const addSectionHandler = () => {
    setInstructions([
      ...instructionsList,
      { instructionsFor: "", instructions: [""] },
    ]);
  };

  const removeSectionHandler = (sectionIndex) => {
    const newInstructionsList = [...instructionsList];
    newInstructionsList.splice(sectionIndex, 1);
    setInstructions(newInstructionsList);
  };

  const addInstructionHandler = (sectionIndex) => {
    const newInstructionsList = [...instructionsList];
    newInstructionsList[sectionIndex].instructions.push("");
    setInstructions(newInstructionsList);
  };

  const removeInstructionHandler = (sectionIndex, index) => {
    const newInstructionsList = [...instructionsList];
    newInstructionsList[sectionIndex].instructions.splice(index, 1);
    setInstructions(newInstructionsList);
  };

  return (
    <Form.Group className="mb-5">
      <Form.Label>Instructions</Form.Label>
      {instructionsList.map((section, sectionIndex) => {
        return (
          <Form.Group className="mb-3" key={sectionIndex}>
            <Form.Group as={Row} controlId="instructionsFor">
              <Form.Label column sm="auto">
                Section
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  placeholder="Instruction for..."
                  value={section.instructionsFor}
                  onChange={(event) =>
                    editInstructionhandler(event, sectionIndex)
                  }
                />
              </Col>
              <Col md="auto">
                <Button
                  onClick={() => removeSectionHandler(sectionIndex)}
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
              {sectionIndex === instructionsList.length - 1 && (
                <Col md="auto">
                  <Button onClick={addSectionHandler}>
                    Add new instruction section
                  </Button>
                </Col>
              )}
            </Form.Group>
            {section.instructions.map((instruction, index) => (
              <Row
                name="instructionRow"
                key={index}
                className="align-items-center"
              >
                <Col>
                  <InputGroup>
                    <InputGroup.Text lg={1}>{index + 1}.</InputGroup.Text>
                    <FormControl
                      as="textarea"
                      rows={1}
                      id={`instructions`}
                      placeholder="Next step"
                      value={instruction}
                      onChange={(event) =>
                        editInstructionhandler(event, sectionIndex, index)
                      }
                    ></FormControl>
                  </InputGroup>
                </Col>
                <Col md="auto">
                  <Button
                    name="removeInstructionBtn"
                    onClick={() =>
                      removeInstructionHandler(sectionIndex, index)
                    }
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
                {index === section.instructions.length - 1 && (
                  <Col md="auto">
                    <Button
                      name="adddInstructionBtn"
                      onClick={() => addInstructionHandler(sectionIndex)}
                    >
                      Add another step
                    </Button>
                  </Col>
                )}
              </Row>
            ))}
          </Form.Group>
        );
      })}
    </Form.Group>
  );
};

export default FormInstructions;
