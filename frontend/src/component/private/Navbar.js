import React from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signup");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"> </i>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  {" "}
                  Your Posts{" "}
                </NavLink>{" "}
              </li>
              <NavLink className="nav-link" to="/addPosts">
                <li className="nav-item"> ADD Post </li>{" "}
              </NavLink>{" "}
              <li className="nav-item">
                <NavLink className="nav-link" to="/publicPosts">
                  Public Post{" "}
                </NavLink>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="d-flex align-items-center">
            <NavLink className="text-reset me-3" to="/">
              <i className="fas fa-shopping-cart"> </i>{" "}
            </NavLink>
            <ul> </ul>
            <div className="dropdown">
              <button onClick={logout}> logout </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
      <Outlet />
    </>
  );
}
