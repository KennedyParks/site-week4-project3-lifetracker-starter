import React from "react";
import "./NutritionCard.css";

const NutritionCard = ({ name, category, quantity, calories, image_url }) => {
  return (
    <div className="NutritionCard">
      <div className="card-header">
        <img src={image_url} alt={name} />
        <h2 className="title">{name}</h2>
      </div>
      <div className="card-stats">
        <div className="CardStat">
          <p>Calories</p>
          <span>{calories}</span>
        </div>
        <div className="CardStat">
          <p>Quantity</p>
          <span>{quantity}</span>
        </div>
      </div>
      <div className="card-meta">
        {/* here goes the timestampt the food was entered ---> need to create a function?? or pased a date_created colum on nutrition table database???*/}
        <small>{}</small>
        <small className="category">{category}</small>
      </div>
    </div>
  );
};

export default NutritionCard;
