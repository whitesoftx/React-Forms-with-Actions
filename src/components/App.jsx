import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setUpdateName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {updateName}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
