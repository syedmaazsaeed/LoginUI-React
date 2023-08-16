import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (email && pass && name) {
      // If all fields are entered
      console.log("Form submitted with name:", name, "email:", email);
      // Show an awesome success message
      Swal.fire({
        icon: "success",
        title: "Awesome!",
        text: "You have successfully registered.",
      });
    } else {
      // If any field is missing
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields.",
      });
    }
  };

  return (
    <div className="form-container-Registration">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Enter Your Full Name"
          onChange={handleNameChange}
        />
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
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here
      </button>
    </div>
  );
};
