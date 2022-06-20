import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext/Context";
import { BsFillArrowLeftCircleFill as LeftArrowIcon } from "react-icons/bs";
import "./styles.css";
import SearchInput from "../SearchInput";
import InputSearchContext from "../../contexts/InputSearchContext/Context";

export type HomePageHeaderProps = {
  children?: React.ReactNode;
};

const HomePageHeader = ({ children }: HomePageHeaderProps) => {
  const { inputLogin, setInputLogin } = useContext(LoginContext);
  const { setInputSearch } = useContext(InputSearchContext);
  const navigate = useNavigate();

  const HandleReturn = () => {
    setInputLogin("");
    setInputSearch("");

    navigate("/");
  };

  return (
    //
    <header className="HomeHeader">
      <div className="GoBack" onClick={HandleReturn}>
        <LeftArrowIcon />
        <h1 className="HeaderBack">Go Back</h1>
      </div>

      <SearchInput />

      <h1 className="HeaderTitle">{inputLogin ? inputLogin : "No user"}</h1>
    </header>
  );
};

export default HomePageHeader;
