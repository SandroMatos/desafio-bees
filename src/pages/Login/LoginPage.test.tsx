import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <Login />
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<Login />", () => {
  it("should render Login title and sub-title", () => {
    const title = screen.getByRole("heading", {
      name: /Please, enter your full name below/i,
    });
    const subTitle = screen.getByRole("heading", {
      name: /Only alphabetical characters are accepted/i,
    });

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
