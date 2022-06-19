import api from "../api";

const CardsBrewery = {
  getBreweries: async (filter: number) => {
    const responseHttp = await api.get(`breweries?per_page=${filter}`);
    return responseHttp;
  },
};

export default CardsBrewery;
