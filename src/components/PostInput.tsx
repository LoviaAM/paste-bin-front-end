import React, { useState } from "react";
//import stylesheet from "../css/stylesheet"

export default function PostInput(): JSX.Element {
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState("");

  const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { title, description };
      const response = await fetch("https://sleepy-mountain-69917.herokuapp.com/input", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body), //understand this code- fetching post request
      });

      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h1 className="title">PASTE BIN</h1>
      <form className="d-flex mt-5" onSubmit={submitPost}>
        <h3> description</h3>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h3>title</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className="btn btn-warning">ADD</button>
      </form>
    </div>
  );
}
// understanding onSubmit - https://stackoverflow.com/questions/50499443/form-onsubmit-vs-onclick

// save button
