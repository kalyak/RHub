import { render, screen } from "@testing-library/react";
import React from "react";
import RecipeForm from "./RecipeForm";
import userEvent from "@testing-library/user-event";

describe("RecipeForm component", () => {
  test("renders ingredient selections", () => {
    //Arrange
    render(<RecipeForm />);

    //Act
    //...Do nothing

    //Assert
    const outputElement = screen.getAllByRole("spinbutton"); //ingredients amount fields
    expect(outputElement.length === 1);
  });

  test("Add ingredient button functional", () => {
    //Arrange
    render(<RecipeForm />);

    //Act
    const addBtn = screen.getByRole("button", { name: "Add another" });
    userEvent.click(addBtn);
    const newBtn = screen.getByRole("button", { name: "Add another" });
    userEvent.click(newBtn);

    //Assert
    const outputElement = screen.getAllByRole("spinbutton"); //ingredients amount fields
    console.log(outputElement);
    expect(outputElement).toHaveLength(3);
  });

  test("Delete ingredient button", () => {
    //Arrange
    render(<RecipeForm />);

    //Act
    screen.getByRole("none", { name: "ingredient" });
    const addBtn = screen.getByRole("button", { name: "Add another" });
    userEvent.click(addBtn);
    const newBtn = screen.getByRole("button", { name: "Add another" });
    userEvent.click(newBtn);

    //Assert
    const outputElement = screen.getAllByRole("spinbutton"); //ingredients amount fields
    expect(outputElement).toHaveLength(3);
  });
});
