import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setAppState }) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const user = {
        email: data.get("email"),
        password: data.get("password"),
      };
      try {
        const res = await axios.post(
          `https://lifetracker-yka.herokuapp.com/login`,
          user
        );
        if (res?.data?.user) {
          setAppState(res.data);
          navigate("/activity");
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
        <h2>Log Nutrition</h2>
    )};