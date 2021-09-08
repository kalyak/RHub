import React from "react";

const InstructionsList = ({ instructionsList }) => {
  return (
    <React.Fragment>
      {instructionsList.map((section, index) => (
        <ol
          className="list-group list-group-numbered list-group-flush"
          key={index}
        >
          <h3>Instructions for {section.instructionsFor}</h3>
          {section.instructions.map((instruction, index) => (
            <li className="list-group-item" key={index}>
              {instruction}
            </li>
          ))}
        </ol>
      ))}
    </React.Fragment>
  );
};

export default InstructionsList;
