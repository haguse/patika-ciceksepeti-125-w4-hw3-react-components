import React from "react";
import "../styles/card.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Card = ({ card }) => {
  const fillStars = card.stars % 5;
  const outlineStars = 5 - fillStars;
  const fillStarsArray = [];
  const outlineStarsArray = [];
  for (let i = 0; i < fillStars; i++) {
    fillStarsArray.push(<AiFillStar />);
  }
  for (let i = 0; i < outlineStars; i++) {
    outlineStarsArray.push(<AiOutlineStar />);
  }

  return (
    <div className="card">
      <img src={card.image} alt="Card" />
      <div className="card__category">
        <span>{card.category}</span>
      </div>
      <div className="card__body">
        <p className="card__title">{card.title.toUpperCase()}</p>
        <div className="card__info">
          <div className="card__stars">
            {fillStarsArray.map((star, index) => {
              return <span key={index}>{star}</span>;
            })}
            {outlineStarsArray.map((star, index) => {
              return <span key={index}>{star}</span>;
            })}
          </div>
          <div>
            <p>{card.review} reviews</p>
          </div>
        </div>
        <p>{card.description.slice(0, 200)}.</p>
      </div>
    </div>
  );
};

export default Card;
