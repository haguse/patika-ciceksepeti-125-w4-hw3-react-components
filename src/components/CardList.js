import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/cardList.scss"

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://61517f6b4a5f22001701d24c.mockapi.io/foods")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <>
      <div className="cards">
        {cards.slice(0, 9).map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </>
  );
};

export default CardList;
