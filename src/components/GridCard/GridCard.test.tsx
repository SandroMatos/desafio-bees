import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import GridCard from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";
import CardPropsMock from "./mock/CardProps";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <GridCard {...CardPropsMock} />
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  Setup();
});

describe("<GridCard />", () => {
  it("should render card Title with mock props", () => {
    const title = screen.getByText(CardPropsMock.title);

    expect(title).toBeInTheDocument();
  });

  it("should render card addresses with mock props", () => {
    const address1 = screen.getByText(CardPropsMock.endereco1);
    const address2 = screen.getByText(CardPropsMock.endereco2);

    expect(address1).toBeInTheDocument();
    expect(address2).toBeInTheDocument();
  });

  it("should render card options with mock props", () => {
    const opt1 = screen.getByText(CardPropsMock.opt1);
    const opt2 = screen.getByText(CardPropsMock.opt2);
    const opt3 = screen.getByText(CardPropsMock.opt3);

    expect(opt1).toBeInTheDocument();
    expect(opt2).toBeInTheDocument();
    expect(opt3).toBeInTheDocument();
  });

  it("should show input when user clicks on option 4 and type and save", () => {
    const opt4 = screen.getByTestId("Opt4");
    userEvent.click(opt4);

    const inputOption4 = screen.getByTestId("InputOpt4");
    expect(inputOption4).toBeInTheDocument();

    userEvent.type(inputOption4, "Sandro Martins");
    expect(inputOption4).toHaveValue("Sandro Martins");
  });
});
