import React from "react";
import "./styles.css";

export type GridCardOptionProps = {
  children: React.ReactNode;
};

const GridCardOption = ({ children }: GridCardOptionProps) => {
  return (
    //
    <div className="CardOption">{children}</div>
  );
};

export default GridCardOption;
