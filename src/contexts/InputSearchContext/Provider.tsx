import React, { useState } from "react";
import { initialValues } from "../../constants/contexts/InputSearch/InputSearch";
import InputSearchContext from "./Context";

export type InputSearchProviderProps = {
  children: React.ReactNode;
};
const InputSearchProvider = ({ children }: InputSearchProviderProps) => {
  const [inputSearch, setInputSearch] = useState(initialValues.inputSearch);

  return (
    //
    <InputSearchContext.Provider value={{ inputSearch, setInputSearch }}>
      {children}
    </InputSearchContext.Provider>
  );
};

export default InputSearchProvider;
