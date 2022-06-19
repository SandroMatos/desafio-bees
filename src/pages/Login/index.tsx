import React from "react";
import InputLogin from "../../components/LoginInput";
import "./styles.css";

export type LoginProps = {
  children?: React.ReactNode;
};
const Login = ({ children }: LoginProps) => {
  return (
    //
    <div className="main">
      <div className="wrapper">
        <h1 className="title">Please, enter your full name below</h1>
        <h2 className="sub-title">Only alphabetical characters are accepted</h2>
        <InputLogin />
      </div>
    </div>
  );
};

export default Login;
