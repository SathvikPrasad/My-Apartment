import React from "react";
import app from "../FireBase";

function Login() {
  const handelLogin = async (event) => {
    event.preventDefault();
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" container signin-container">
        <form onSubmit={handelLogin}>
          <div className="input-field">
            <input
              id="emial"
              name="email"
              type="email"
              className="white-text"
            />
            <label
              htmlFor="email"
              className="white-text"
              style={{ backgroundColor: "#202027" }}
            >
              Email
            </label>
          </div>
          <div className="input-field">
            <input
              id="password"
              name="password"
              type="password"
              className="white-text"
            />
            <label
              htmlFor="password"
              className="white-text"
              style={{ backgroundColor: "#202027" }}
            >
              Password
            </label>
          </div>
          <div className="submit-button">
            <button className=" waves-effect indigo accent-3 btn ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
