import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext/Context";
import { BsFillArrowLeftCircleFill as LeftArrowIcon } from "react-icons/bs";
import "./styles.css";

export type HomePageHeaderProps = {
  children?: React.ReactNode;
};

const HomePageHeader = ({ children }: HomePageHeaderProps) => {
  const { inputLogin, setInputLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const HandleReturn = () => {
    setInputLogin("");

    navigate("/");
  };

  return (
    //
    <header className="HomeHeader">
      <div className="GoBack" onClick={HandleReturn}>
        <LeftArrowIcon />
        <h1 className="HeaderBack">Go Back</h1>
      </div>
      <h1 className="HeaderTitle">{inputLogin ? inputLogin : "No user"}</h1>
    </header>
  );
};

export default HomePageHeader;
