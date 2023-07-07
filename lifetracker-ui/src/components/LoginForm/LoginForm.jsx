import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setAppState }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleOnInputChange = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const res = await axios.post(
        `http://localhost:3001/auth/login`,
        user
      );
      if (res?.data?.user) {
        setAppState(res.data);
        navigate("/activity");
        setSubmittedData(res.data); // Set the submitted data
      } else {
        setErrors((e) => ({
          ...e,
          user: "Invalid username/password combination",
        }));
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        user: message ? String(message) : String(err),
      }));
    }
    console.log(data);
  };

  return (
    <>
      <h2>Log Nutrition</h2>
      <form id="myForm" onSubmit={handleOnInputChange}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" required>
          <option value="food">Food</option>
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.user.name}</p>
          <p>Category: {submittedData.user.category}</p>
        </div>
      )}
    </>
  );
}
