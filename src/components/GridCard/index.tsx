/* eslint-disable array-callback-return */
import { FaTrashAlt as TrashIcon } from "react-icons/fa";
import { GoLocation, GoGraph } from "react-icons/go";
import { BsTelephone as TelephoneIcon } from "react-icons/bs";
import { GrAddCircle as AddCircleIcon } from "react-icons/gr";
import { AiOutlineCheckCircle as CheckCircleIcon } from "react-icons/ai";
import GridCardOption from "../GridCardOptions";
import "./styles.css";
import { GridCardProps } from "../../constants/components/GridCard/interfaces";
import { CardsDataTypes } from "../../constants/contexts/Cards/interfaces";
import { useContext, useState } from "react";
import CardContext from "../../contexts/CardContext/Context";

const GridCard = ({
  id,
  title,
  endereco1,
  endereco2,
  opt1,
  opt2,
  opt3,
}: GridCardProps) => {
  const [flagInput, setFlagInput] = useState<boolean>(false);
  const [option, setOption] = useState<string>("Add more");
  const { cardsData, setCardsData } = useContext(CardContext);

  const handleInput = () => {
    setOption("");
    setFlagInput(true);
  };

  const handleOption = (e: string) => {
    if (e === "") {
      setOption("Add more");
    }

    setFlagInput(false);
  };

  const handleDeleteCard = () => {
    let arr: Array<CardsDataTypes> = cardsData.filter((card) => {
      if (card.id === id) {
        return;
      }
      return card;
    });

    setCardsData(arr);
  };
  return (
    //
    <div className="CardContainer">
      <TrashIcon onClick={handleDeleteCard} />
      <div className="ContainerContent">
        <h1 className="CardTitle">{title}</h1>
        <p className="CardAddress">{endereco1}</p>
        <p className="CardAddress">{endereco2}</p>
        <div className="CardOptionsContainer">
          <GridCardOption>
            <GoGraph />
            {opt1}
          </GridCardOption>
          <GridCardOption>
            <GoLocation />
            {opt2}
          </GridCardOption>
          <GridCardOption>
            <TelephoneIcon />
            {opt3}
          </GridCardOption>
          <GridCardOption>
            <span
              className="SpanOption"
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={() => handleInput()}
              data-testid="Opt4"
            >
              {flagInput ? (
                <>
                  <CheckCircleIcon />
                  <input
                    type="text"
                    autoFocus={true}
                    onBlur={(e) => handleOption(e.target.value)}
                    onChange={(e) => setOption(e.target.value)}
                    value={option}
                    maxLength={15}
                    data-testid="InputOpt4"
                    style={{ maxWidth: "3.5rem" }}
                  />
                </>
              ) : (
                <>
                  {option === "Add more" ? <AddCircleIcon /> : ""}
                  {option}
                </>
              )}
            </span>
          </GridCardOption>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
