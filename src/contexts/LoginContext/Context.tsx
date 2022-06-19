import { createContext } from "react";
import { LoginContextInterface } from "../../constants/contexts/LoginPage/interfaces";
import { initialValues } from "../../constants/contexts/LoginPage/LoginPage";

const LoginContext = createContext<LoginContextInterface>(initialValues);

export default LoginContext;
