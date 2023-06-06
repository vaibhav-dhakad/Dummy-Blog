import React from "react";
import "./CommentCard.css";
import UserComment from "./UserComment";
export default function CommentCard(props) {
  // const comment = props.UserComment[0]  
  // console.log(comment)
  return (
    <div>
      <section style={{ backgroundColor:"salmon" }}>
        <div className="container my-1 py-1 text-dark">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="d-flex justify-content-between align-items-center mb-4"></div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex flex-start">
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="text-primary fw-bold mb-0">
                          {props.UserComment[0]?.user_id?.user_name}
                          <span className="text-dark ms-2">{props.UserComment[0]?.comment}</span>
                        </h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row">
                          <i className="far fa-check-circle text-primary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
