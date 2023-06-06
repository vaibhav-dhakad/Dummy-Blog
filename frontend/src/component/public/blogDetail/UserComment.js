import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

export default function UserComment(props) {
  const [UserComment, setUserComment] = useState([]);
  const [comment, setcomment] = useState();

  // const [loading, setloading] = useState(false); 
  const auth = localStorage.getItem("token");
  const blog_id = props.item._id;
 
  const onComment = async () => {
    const commentData = await fetch(
      "http://localhost:8000/comment/addcomment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
      token: auth},
        body: JSON.stringify({ blog_id, comment }),
      }
    );

    const data = await commentData.json();
    console.log(data,"oncomment");
    getComments()
   
  };
  const getComments = async () => {
    const comments = await fetch(
      "http://localhost:8000/comment/getUserComment",
      {
        method: "GET",
        headers: {
          token: auth,
        id: blog_id
        },
      }
    );
    const commentsData = await comments.json();
    // console.log(commentsData)
    if(commentsData.length ===0){
    setUserComment(false)} 
    else{
    setUserComment(commentsData)
    }
  };

  useEffect(() => {
    getComments();       
  }, []);

  return (
  <>
  
{UserComment ? <div>
<CommentCard UserComment={UserComment}></CommentCard>


  </div>: 

<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" onChange={(e)=>{setcomment(e.target.value) ;console.log(comment)}}   id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Comment</label>
  <button onClick={onComment}>Comment</button>
</div> }
 </>);
}
