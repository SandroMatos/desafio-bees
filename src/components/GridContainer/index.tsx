/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import CardContext from "../../contexts/CardContext/Context";
import InputSearchContext from "../../contexts/InputSearchContext/Context";
import CardsBrewery from "../../services/Cards/CardsBrewery";
import formatAddress from "../../utils/formatAddress";
import verifyItem from "../../utils/verifyItem";
import ErrorPage from "../Error";
import GridCard from "../GridCard";
import Loading from "../Loading";
import "./styles.css";

export type GridContainerProps = {
  children?: React.ReactNode;
};

const GridContainer = ({ children }: GridContainerProps) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { cardsData, setCardsData } = useContext(CardContext);
  const { inputSearch } = useContext(InputSearchContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await CardsBrewery.getBreweries(6);
        const data = await response.data;

        setCardsData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setCardsData]);

  return (
    //
    <>
      {error && <ErrorPage />}
      {loading && <Loading />}

      {!error && (
        <div className="ContainerMain">
          {cardsData &&
            cardsData
              .filter((filter) => {
                //Filtra por nome
                if (
                  filter.name.toLowerCase().includes(inputSearch.toLowerCase())
                ) {
                  return filter;
                }
                return;
              })
              .map((item, i) => {
                return (
                  <GridCard
                    key={item.id + i}
                    id={item.id}
                    title={verifyItem(item.name, "name")}
                    endereco1={verifyItem(item.street, "street")}
                    endereco2={formatAddress(
                      item.city,
                      item.state,
                      item.country
                    )}
                    opt1={verifyItem(item.brewery_type, "brewery")}
                    opt2={verifyItem(item.postal_code, "postal code")}
                    opt3={verifyItem(item.phone, "phone")}
                  />
                );
              })}
        </div>
      )}
    </>
  );
};

export default GridContainer;
