/* eslint-disable array-callback-return */
import { FaTrashAlt as TrashIcon } from "react-icons/fa";

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
      </div>
    </div>
  );
};

export default GridCard;
