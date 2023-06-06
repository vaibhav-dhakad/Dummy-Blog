import React from 'react'

export default function BlogCard(props) {
  return (<>
<>
  
    <div className="card" style={{"height":"210px"}}>
    <div className="card-body">
      <h5 className="card-title"> {props.title}</h5>
      <p className="card-text">{props.description}</p>
      <button type="button" className="btn btn-primary" onClick={props.edit}>Edit</button>
      <button type="button" className="btn btn-primary" onClick={props.deleted}>delete</button>
    </div>
    </div>
    </></>
  )
}
