import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GridCardOptions from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <GridCardOptions>Children Option</GridCardOptions>
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<GridCardOptions />", () => {
  it("should render option text on children", () => {
    const OptionText = screen.getByText("Children Option");

    expect(OptionText).toBeInTheDocument();
  });
});
