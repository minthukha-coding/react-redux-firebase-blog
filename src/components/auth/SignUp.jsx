import React, { useState } from "react";

const SignUp = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  }

  const handleChange = (e) => {
    setcredentials({
      ...credentials,
      [e.target.id]: e.target.value
    });
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="">Firstname</label>
          <input type="email" id="firstname" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="">LastName</label>
          <input type="text" id="lastname" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;