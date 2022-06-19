import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <ErrorPage />
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<ErrorPage />", () => {
  it("should render error message", () => {
    const errorMsg = screen.getByRole("heading", {
      name: /An error occurred during the request! Try again Later!/i,
    });

    expect(errorMsg).toBeInTheDocument();
  });
});
