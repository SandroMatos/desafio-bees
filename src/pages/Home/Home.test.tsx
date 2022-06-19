import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <HomePage />
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<HomePage />", () => {
  it("should render Home Page", () => {
    expect(screen.getByTestId("homeBG")).toBeInTheDocument();
  });
});
