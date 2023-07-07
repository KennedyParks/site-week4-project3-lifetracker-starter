import React from "react";
import { useState, useEffect } from "react";
//import apiClient from "../services/apiClient";
import NutritionCard from "../NutritionCard/NutritionCard";
import "./NutritionFeed.css";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const NutritionFeed = ({ nutritions, setNutritions }) => {
  const currentTime = new Date().toLocaleString();
  console.log("current time", currentTime);

  useEffect(() => {
    const fetchNutrition = async () => {
      const { data } = await apiClient.listNutrition();
      console.log("data", data.nutritions);
      if (data) {
        setNutritions(data.nutritions);
      }
    };
    fetchNutrition();
  }, []);

  console.log("array", nutritions);
  return (
    <div className="cards">
      {nutritions.map((entry) => (
        <NutritionCard
          name={entry.name}
          category={entry.category}
          quantity={entry.quantity}
          calories={entry.calories}
          image_url={entry.image_url}
          // timestamp={formatDate(entry.timestamp) === "Invalid Date" ? currentTime : formatDate(entry.timestamp)}
        />
      ))}
    </div>
  );
};

export default NutritionFeed;