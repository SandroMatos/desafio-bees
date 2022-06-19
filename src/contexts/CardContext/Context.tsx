import { createContext } from "react";
import { initialValues } from "../../constants/contexts/Cards/CardConstants";

const CardContext = createContext(initialValues);

export default CardContext;
