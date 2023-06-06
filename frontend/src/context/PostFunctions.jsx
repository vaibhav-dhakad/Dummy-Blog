// import React, { useState } from "react";
// import { PostContext } from "./PostContext";
// export default function PostFunctions(props) {
//   // const [getdata, setgetData] = useState('');
//   const auth = localStorage.getItem("token");
  
//   const getData = async () => {
//     const posts = await fetch("http://localhost:8000/blog/getUserPosts", {
//       method: "GET",

//       headers: {
//         token: auth,
//       },
//     });
//     const data = await posts.json();

//    console.log(data);
//     return data;
//   };

//   return (
//     <PostContext.Provider value={{ getData }}>
//       {props.children}
//     </PostContext.Provider>
//   );
// }
