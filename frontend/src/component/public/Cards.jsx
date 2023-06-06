import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Card (props) {
  const navigate=useNavigate()
  const more=(item)=>{
navigate(`/${item._id}` ,{ state: { item: item } })
  }
  
 
  return (
    <>    <div className="card" style={{"height":"210px"}}>
 <div className="card-body">
 <span className="badge text-bg-info" style={{width:"50%",height:"30px",fontSize:"15px"}}>{props.username}</span>
      <h5 className="card-title"> {props.title}</h5>
      <p className="card-text">{props.description}</p>
      <div className="form-floating">
  <button type="button" className="btn btn-primary" onClick={()=>more(props.item)}>More...  </button>
</div>
    </div>
    </div>
    </>
  )
}
