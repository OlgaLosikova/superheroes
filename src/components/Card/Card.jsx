import React from "react";
import StarRating from "../StarRating/StarRating"

const Card = (props) => {
  const {title, description, imgLink, alt} = props;
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <img src={imgLink} alt={alt} />
      </div>
      <StarRating />
    </div>
  );
};

export default Card;
