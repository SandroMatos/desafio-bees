import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SearchInput from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import InputSearchProvider from "../../contexts/InputSearchContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <InputSearchProvider>
            <SearchInput />
          </InputSearchProvider>
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<SearchInput />", () => {
  it("should render inputs and button", () => {
    expect(screen.getByTestId("InputText")).toBeInTheDocument();
  });

  it("should able only alphabetical characters when user try to type numbers etc.", () => {
    const input = screen.getByTestId("InputText");

    userEvent.type(input, "Sandro");
    expect(input).toHaveValue("Sandro");

    userEvent.type(input, "12345@@");
    expect(input).toHaveValue("Sandro");

    userEvent.clear(input);
    expect(input).toHaveValue("");
  });
});
