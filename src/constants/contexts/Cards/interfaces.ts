export interface CardsDataTypes {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  brewery_type: string;
  postal_code: string;
  phone: string;
}

export interface CardContextInterface {
  cardsData: Array<CardsDataTypes>;
  setCardsData: (state: Array<CardsDataTypes>) => void;
}
