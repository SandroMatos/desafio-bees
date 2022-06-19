import React from "react";
import "./styles.css";

export type ErrorPageProps = {
  children?: React.ReactNode;
};
const ErrorPage = ({ children }: ErrorPageProps) => {
  return (
    //
    <div className="mainBG">
      <h1 className="titleError">
        An error occurred during the request! Try again Later!
      </h1>
    </div>
  );
};

export default ErrorPage;
