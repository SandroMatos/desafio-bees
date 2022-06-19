import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Loading from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <Loading />
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<Loading />", () => {
  it("should render loading", () => {
    expect(screen.getByTestId("LoadingIcon")).toBeInTheDocument();
  });
});
