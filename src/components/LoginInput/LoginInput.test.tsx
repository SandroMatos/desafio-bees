import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import InputLogin from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <InputLogin />
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<InputLogin />", () => {
  it("should render inputs and button", () => {
    expect(screen.getByTestId("InputText")).toBeInTheDocument();
    expect(screen.getByTestId("InputCheckBox")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Enter/i })).toBeInTheDocument();
  });

  it("should lock button when inputs are empty", () => {
    const btn = screen.getByRole("link", { name: /Enter/i });

    expect(btn).toHaveClass("Disable");
  });

  it("should able only alphabetical characters when user try to type numbers etc.", () => {
    const input = screen.getByTestId("InputText");

    userEvent.type(input, "Sandro");
    expect(input).toHaveValue("Sandro");

    userEvent.type(input, "12345");
    expect(input).toHaveValue("Sandro");

    userEvent.clear(input);
    expect(input).toHaveValue("");
  });

  it("should unlock button when inputs are filled sucessfully", () => {
    const input = screen.getByTestId("InputText");
    const inputCheck = screen.getByTestId("InputCheckBox");
    const btn = screen.getByRole("link", { name: /Enter/i });

    userEvent.type(input, "Sandro");
    userEvent.click(inputCheck);

    expect(btn).not.toHaveClass("Disable");
  });
});
