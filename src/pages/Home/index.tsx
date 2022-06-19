import React from "react";
import HomePageHeader from "../../components/HomePageHeader";

import "./styles.css";

export type HomePageProps = {
  children?: React.ReactNode;
};

const HomePage = ({ children }: HomePageProps) => {
  return (
    //
    <div className="BackgroundMain" data-testid="homeBG">
      <HomePageHeader />
    </div>
  );
};

export default HomePage;
