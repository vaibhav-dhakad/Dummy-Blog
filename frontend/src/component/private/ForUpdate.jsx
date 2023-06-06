import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ForUpdate() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  console.log(id);
  const [posts, setposts] = useState({ title: "", description: "" });
  const auth = localStorage.getItem("token");
  const get = async () => {
    const response = await fetch("http://localhost:8000/blog/getOnePost", {
      method: "GET",

      headers: {
        id: id,
        token: auth,
      },
    });
    const json = await response.json();
    console.log(json);

    // Save the auth token and redirect
    await setposts({ title: json.title, description: json.description });
  };
  useEffect(() => {
    get();
  }, []);
  const onChanges = (e) => {
    setposts({ [e.target.name]: e.target.value });
  };
  const submitFunc = async (e) => {
    const { title, description } = posts;
    console.log(posts.description);
    const response = await fetch("http://localhost:8000/blog/updatePost", {
      method: "PUT",

      headers: {
        id: id,
        token: auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    console.log(json);

    // Save the auth token and redirect
    console.log(posts);
    navigate("/");
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
          value={posts.title}
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
          id="textAreaExample"
          value={posts.description}
          onChange={onChanges}
          rows="4"
        ></textarea>
      </div>
      <button type="button" onClick={submitFunc}>
        Update
      </button>
    </div>
  );
}
