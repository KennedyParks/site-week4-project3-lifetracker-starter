import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import apiClient from "../services/apiClient";
import "./NutritionForm.css";

const NutritionForm = ({ setAppState }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [nutritions, setNutritions] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: 0,
    calories: 0,
    image_url: "",
  });

  const handleOnInputChangeNutrition = (event) => {
    setForm((field) => ({ ...field, [event.target.name]: event.target.value }));

    setErrors((e) => ({ ...e, form: "Please fill out missing fields." }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));
    if (form.name === "" || form.category === "" || form.quantity === "" || form.calories === "") {
      return alert("Please fill out the entire form.");
    }

 const token = localStorage.getItem("token");
    console.log(form.name);
    try {
      const res = await axios.post("http://localhost:3001/nutrition", {
        name: form.name,
        category: form.category,
        quantity: form.quantity,
        calories: form.calories,
        image_url: form.image_url,
        token: token
      });
    

      if (res?.data?.user) {
        setAppState(res.data);
        setIsLoading(false);
        navigate("/nutrition");
        setNutritionData(form);

      } else {
        setErrors((e) => ({ ...e, form: "Something went wrong with registration" }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log("ERROR", err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }));
      setIsLoading(false);
    }
  };


  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Nutrition</h1>
      </div>
      <div className="content">
        <div className="ExerciseNew">
          <h2>Record Nutrition</h2>
          <div className="form">
            <div className="InputField">
              <label>Name</label>
              <input type="text" name="name" placeholder="Nutrition name" value={form.name} onChange={handleOnInputChangeNutrition} />
              {/* {errors.email && <span className="error">{errors.email}</span>} */}
            </div>
            <div className="InputField">
              <label>Category</label>
              <input type="text" name="category" placeholder="Nutrition category" value={form.category} onChange={handleOnInputChangeNutrition} />
            </div>
            <div className="split-input-field">
              <div className="InputField">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="100000000"
                  // defaultValue="1"
                  value={form.quantity}
                  onChange={handleOnInputChangeNutrition}
                />
              </div>
              <div className="InputField">
                <label>Calories</label>
                <input
                  type="number"
                  name="calories"
                  min="0"
                  max="10"
                  // defaultValue="1"
                  value={form.calories}
                  onChange={handleOnInputChangeNutrition}
                />
              </div>
            </div>
            <div className="InputField">
              <label>Image URL</label>
              <input type="text" name="image_url" placeholder="http://www.food-image.com/1" value={form.image_url} onChange={handleOnInputChangeNutrition} />
            </div>
            <button className="Button primary large  aqua" disabled={isLoading} onClick={handleOnSubmit}>
              {isLoading ? "Loading..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionForm;