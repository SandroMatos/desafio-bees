import { AxiosResponse } from "axios";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GridContainer from ".";
import CardProvider from "../../contexts/CardContext/Provider";
import LoginProvider from "../../contexts/LoginContext/Provider";

import api from "../../services/api";
import formatAddress from "../../utils/formatAddress";

const Setup = () => {
  render(
    <BrowserRouter>
      <CardProvider>
        <LoginProvider>
          <GridContainer></GridContainer>
        </LoginProvider>
      </CardProvider>
    </BrowserRouter>
  );
};

const breweries = {
  data: [
    {
      name: "brewery title",
      street: "street",
      city: "city",
      state: "state",
      country: "country",
      brewery_type: "brewery",
      postal_code: "postal",
      phone: "34455",
    },
  ],
} as AxiosResponse;

describe("Loading while fetching", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render loading icon during request", async () => {
    jest.spyOn(api, "get");
    await act(async () => {
      Setup();
    });
    const loading = screen.getByTestId("LoadingIcon");
    expect(loading).toBeInTheDocument();
  });
});

describe("Fetch success", () => {
  beforeEach(async () => {
    jest.spyOn(api, "get").mockResolvedValueOnce(breweries);

    await act(async () => {
      Setup();
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render card with brewery name", async () => {
    const name = screen.getByText(breweries.data[0].name);

    expect(name).toBeInTheDocument();
  });

  it("should render card with brewery locations", async () => {
    const street = screen.getByText(breweries.data[0].street);

    const address = screen.getByText(
      formatAddress(
        breweries.data[0].city,
        breweries.data[0].state,
        breweries.data[0].country
      )
    );

    expect(street).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });

  it("should render card with brewery options", async () => {
    const type = screen.getByText(breweries.data[0].brewery_type);
    const postal_code = screen.getByText(breweries.data[0].postal_code);
    const phone = screen.getByText(breweries.data[0].phone);

    expect(type).toBeInTheDocument();
    expect(postal_code).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
  });
});

describe("Fetch error", () => {
  beforeEach(async () => {
    jest.spyOn(api, "get").mockRejectedValueOnce({});

    await act(async () => {
      Setup();
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render error message after error", async () => {
    jest.spyOn(api, "get");
    await act(async () => {
      Setup();
    });

    const error = screen.getByText(
      "An error occurred during the request! Try again Later!"
    );

    expect(error).toBeInTheDocument();
  });
});
