import React from "react";
import GridCard from "../GridCard";

import "./styles.css";

export type GridContainerProps = {
  children?: React.ReactNode;
};

const GridContainer = ({ children }: GridContainerProps) => {
  return (
    //

    <div className="ContainerMain">
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
    </div>
  );
};

export default GridContainer;
