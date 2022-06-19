import React, { useState } from "react";
import { initialValues } from "../../constants/contexts/LoginPage/LoginPage";
import LoginContext from "./Context";

export type LoginProviderProps = {
  children: React.ReactNode;
};
const LoginProvider = ({ children }: LoginProviderProps) => {
  const [inputLogin, setInputLogin] = useState(initialValues.inputLogin);

  return (
    //
    <LoginContext.Provider value={{ inputLogin, setInputLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
