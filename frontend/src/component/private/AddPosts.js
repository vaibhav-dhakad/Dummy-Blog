import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPosts() {
  const navigate = useNavigate();
  const [posts, setposts] = useState({ title: "", description: "" });
  const auth = localStorage.getItem("token");
// FUNCTION TO ADD POSTS
  const submitFunc = async (e) => {
    console.log("submit");
    e.preventDefault();
    // console.log(posts);
    const { title, description } = posts;
    //  console.log(name);
    const response = await fetch("http://localhost:8000/blog/addPost", {
      method: "POST",

      headers: {
        token: auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    console.log(json);

    // Save the auth token and redirect

    await navigate("/");
  };

  const onChanges = (e) => {
    setposts({ ...posts, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <div className="container" style={{ margin: "10px", border: "2px" }}>
      <div className="form-outline">
        <label className="form-label" htmlFor="typeText">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="typeText"
          className="form-control"
          onChange={onChanges}
        />
      </div>

      <div className="form-outline">
        <label className="form-label" htmlFor="textAreaExample">
          Description
        </label>
        <textarea
          className="form-control"
          name="description"
          onChange={onChanges}
          rows="4"
        ></textarea>
      </div>
      <button type="button" onClick={submitFunc}>
        Add
      </button>
    </div>
  );
}
