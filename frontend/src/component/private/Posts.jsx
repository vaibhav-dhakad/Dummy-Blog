import React, {  useEffect, useState } from "react";

import BlogCard from "./BlogCard";
// import { PostContext } from "../../context/PostContext";
import { useNavigate } from "react-router-dom";
export default function Posts() {
const [loading,setloading] = useState(true)
  const auth = localStorage.getItem("token");
  const getData = async () => {
    const posts = await fetch("http://localhost:8000/blog/getUserPosts", {
      method: "GET",

      headers: {
        token: auth,
      },
    });
    const data = await posts.json();

  //  console.log(data);
  setloading(false);
    return data;

  };
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [editData, seteditData] = useState({ title: "", description: "" });
  // const context = useContext(PostContext);
  // const { getData } = context;
  const edit = async (item) => {
    navigate("updatePosts", { state: { id: item._id } });
  };
  const deleted = async (item) => {
    console.log(item);
    console.log("deleted");
    const response = await fetch("http://localhost:8000/blog/delete", {
      method: "DELETE",

      headers: {
        id: item._id,
        token: auth,
      },
    });
   gettingData()
  };
  const gettingData = async () => {
    const data = await getData();
    await setdata(data);
  };

  useEffect(() => {
    gettingData();
  }, []);
  return (
    <div  >
      {data.length ? 
        <div className="row">
          {data?.map((item) => {
            return (
              <div key={item._id} className="col-md-4">
                <BlogCard
                  title={item.title}
                  description={item.description}
                  edit={() => edit(item)}
                  deleted={() => deleted(item)}
                />
              </div>
            );
          })}
        </div>
       : 
        !loading && <h2>NO POSTS TO SHOW</h2>
      }
    </div>
  );
}
