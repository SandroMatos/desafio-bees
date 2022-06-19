import React from "react";
import "./styles.css";

export type LoadingProps = {
  children?: React.ReactNode;
};
const Loading = ({ children }: LoadingProps) => {
  return (
    //
    <div className="main-div">
      <div className="lds-dual-ring" data-testid="LoadingIcon"></div>
    </div>
  );
};

export default Loading;
