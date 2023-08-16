import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = () => {
    if (email === "admin@mail.com" && pass === "123") {
      console.log("Form submitted with email:", email);
      window.location.href = "https://sales-product-dashboard.netlify.app/";
    } else if (email === "" || pass === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in both email and password fields.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong credentials. Please try again.",
      });
    }
  };

  return (
    <div className="form-container">
      <FontAwesomeIcon icon={faUserTie} size="4x" color="black" />{" "}
      
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          name="email"
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          type="password"
          placeholder="***********"
          id="password"
          name="password"
          onChange={handlePassChange}
        />
        <button className="btn" type="submit">
          Log In
        </button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here
      </button>
    </div>
  );
};
