import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserComment from "./UserComment";
import PublicComment from "./PublicComment";

export default function BlogDetails() {
  const [AllComments, setAllComments] = useState([]);
  const auth = localStorage.getItem("token");

  const location = useLocation();
  const { item } = location.state;
  // console.log(item,'blogdetails');

  const id = item._id;

  const onload = async () => {
    const comment = await fetch(
      "http://localhost:8000/comment/getAllComments",
      {
        method: "GET",
        headers: {
          token: auth,
          id: id,
        },
      }
    );
    const comments = await comment.json();

    setAllComments(comments);
  };

  useEffect(() => {
    onload();
  }, []);
  // console.log(item)

  // console.log(item)
  return (
    <div>
      <div className="card" style={{ height: "210px" }}>
        <div className="card-body">
          <div className="container"> </div>
          <span
            className="container badge text-bg-info"
            style={{ width: "50%", height: "30px", fontSize: "15px" }}
          >
            {item.title}
          </span>
          <p className="card-text">{item.description}</p>
        </div>
      </div>
      <UserComment item={item}></UserComment>
      <h3> All Comments:-</h3>
      {AllComments?.map((comment) => {
        return (
        <div>
        <PublicComment comment ={comment.comment} userName ={comment.user_id?.user_name} />
        </div>)
      })}

   
    </div>
  );
}
