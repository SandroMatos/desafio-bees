import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext/Context";
import verifyChar from "../../utils/verifyInputChars";
import "./styles.css";

export type InputLoginProps = {
  children?: React.ReactNode;
};
const InputLogin = ({ children }: InputLoginProps) => {
  const { inputLogin, setInputLogin } = useContext(LoginContext);
  const [checkBox, setCheckBox] = useState(false);

  const handleInputLogin = (value: string) => {
    const char = verifyChar(value.substring(value.length - 1));

    if (char || char === "") {
      setInputLogin(value);
    }
  };

  return (
    <div className="LoginContainer">
      <input
        type="text"
        className="InputMain"
        value={inputLogin}
        onChange={(e) => handleInputLogin(e.target.value)}
        maxLength={15}
        data-testid="InputText"
        pattern={"^[a-zA-Z\b]+$"}
        required
      ></input>
      <label>
        <input
          type="checkbox"
          className="CheckboxLogin"
          checked={checkBox}
          onChange={() => setCheckBox((s) => !s)}
          data-testid="InputCheckBox"
        ></input>
        Are you older than 18 years old?
      </label>
      <Link
        className={`LoginButton ${
          inputLogin && checkBox === true ? "" : "Disable"
        }`}
        to={"/home"}
      >
        Enter
      </Link>
    </div>
  );
};

export default InputLogin;
