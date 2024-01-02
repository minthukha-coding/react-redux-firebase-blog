import React, { useState } from "react";

const CreateProject = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  const handleChange = (e) => {
    setcredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Project Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
