import { createContext } from "react";
import { initialValues } from "../../constants/contexts/InputSearch/InputSearch";
import { InputSearchContextInterface } from "../../constants/contexts/InputSearch/interfaces";

const InputSearchContext =
  createContext<InputSearchContextInterface>(initialValues);

export default InputSearchContext;
