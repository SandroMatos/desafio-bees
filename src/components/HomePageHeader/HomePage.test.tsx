import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePageHeader from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <HomePageHeader />
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<HomePageHeader />", () => {
  it("should render error message", () => {
    const GoBack = screen.getByText("Go Back");
    const User = screen.getByText("No user");

    expect(GoBack).toBeInTheDocument();
    expect(User).toBeInTheDocument();
  });
});
