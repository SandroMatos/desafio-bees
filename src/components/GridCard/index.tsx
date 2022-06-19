/* eslint-disable array-callback-return */
import { FaTrashAlt as TrashIcon } from "react-icons/fa";
import { GoLocation, GoGraph } from "react-icons/go";
import { BsTelephone as TelephoneIcon } from "react-icons/bs";
import { GrAddCircle as AddCircleIcon } from "react-icons/gr";
import GridCardOption from "../GridCardOptions";

import "./styles.css";

const GridCard = () => {
  return (
    //
    <div className="CardContainer">
      <TrashIcon />
      <div className="ContainerContent">
        <h1 className="CardTitle">teste titulo</h1>
        <p className="CardAddress">teste endereco</p>
        <p className="CardAddress">teste endereco 2</p>
        <div className="CardOptionsContainer">
          <GridCardOption>
            <GoGraph />
            Option 1aaaaaaa
          </GridCardOption>
          <GridCardOption>
            <GoLocation />
            Option 2
          </GridCardOption>
          <GridCardOption>
            <TelephoneIcon />
            Option 3
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
