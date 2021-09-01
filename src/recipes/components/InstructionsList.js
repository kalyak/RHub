import React from "react";

const InstructionsList = ({ instructionsList }) => {
  return (
    <React.Fragment>
      {instructionsList.map((section) => (
        <ol class="list-group list-group-numbered list-group-flush">
          <h3>Instructions for {section.instructionsFor}</h3>
          {section.instructions.map((instruction) => (
            <li class="list-group-item">{instruction}</li>
          ))}
        </ol>
      ))}{" "}
    </React.Fragment>
  );
};

export default InstructionsList;