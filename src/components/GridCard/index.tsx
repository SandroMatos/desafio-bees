/* eslint-disable array-callback-return */
import { FaTrashAlt as TrashIcon } from "react-icons/fa";
import { GoLocation, GoGraph } from "react-icons/go";
import { BsTelephone as TelephoneIcon } from "react-icons/bs";
import { GrAddCircle as AddCircleIcon } from "react-icons/gr";
import GridCardOption from "../GridCardOptions";

import "./styles.css";
import { GridCardProps } from "../../constants/components/GridCard/interfaces";

const GridCard = ({
  id,
  title,
  endereco1,
  endereco2,
  opt1,
  opt2,
  opt3,
}: GridCardProps) => {
  return (
    //
    <div className="CardContainer">
      <TrashIcon />
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
            <AddCircleIcon />
            Option 4
          </GridCardOption>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
