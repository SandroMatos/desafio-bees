import React, { useContext } from "react";
import InputSearchContext from "../../contexts/InputSearchContext/Context";
import verifyChar from "../../utils/verifyInputChars";
import "./styles.css";

export type SearchInputProps = {
  children?: React.ReactNode;
};
const SearchInput = ({ children }: SearchInputProps) => {
  const { inputSearch, setInputSearch } = useContext(InputSearchContext);

  const handleSearchComp = (value: string) => {
    const char = verifyChar(value.substring(value.length - 1));

    if (char || char === "") {
      setInputSearch(value);
    }
  };

  return (
    //
    <div className="mainDiv">
      <input
        type="text"
        value={inputSearch}
        onChange={(e) => handleSearchComp(e.target.value)}
        className="inputSearch"
        placeholder="Search here"
        data-testid="InputText"
      ></input>
    </div>
  );
};

export default SearchInput;
