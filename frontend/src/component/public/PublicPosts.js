import React, { useState, useEffect } from "react";
import Cards from "./Cards";
export default function PublicPosts() {
  const [data, setdata] = useState();
  
  // const [user, setuser] = useState([]);
  
  const auth = localStorage.getItem("token");
  
  const getData = async () => {
    const posts = await fetch("http://localhost:8000/blog/getAllUsers", {
      method: "GET",
    headers:{
      token: auth,
    }
    });
    const postsData = await posts.json();
    setdata(postsData);
  };
  
  
  
  useEffect(() => {
    
    getData();
    console.log(data);
  }, []);

  return (
    <div style={{ backgroundColor: "grey" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>Global Posts</h1>
      <div className="container">
        {data?.map((item) => {
          return (
            <div key={item._id} style={{ margin: "5px" }}>
              <Cards
              item={item}
                title={item.title}
                description={item.description}
                username={item.user_id.user_name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
