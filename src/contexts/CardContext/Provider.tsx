import React, { useState } from "react";
import { initialValues } from "../../constants/contexts/Cards/CardConstants";
import CardContext from "./Context";

export type CardProviderProps = {
  children: React.ReactNode;
};

const CardProvider = ({ children }: CardProviderProps) => {
  const [cardsData, setCardsData] = useState(initialValues.cardsData);

  return (
    //
    <CardContext.Provider value={{ cardsData, setCardsData }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
