import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-light sticky-top ">
        <nav className="navbar navbar-expand-lg navbar-light  mb-5">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h3
                style={{
                  color: "#842BD7",
                  margin: "10px 0px 0px 0px",
                  padding: "0px",
                  lineHeight: "0px",
                }}
              >
                AYAVL POINT
              </h3>
              <br />
              <h6
                className="text-center "
                style={{
                  color: "#A95AEC",
                  margin: "0px",
                  padding: "0px",
                  lineHeight: "0px",
                }}
              >
                Doctor's Chamber & Dental Clinic
              </h6>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link text-center "
                    aria-current="page"
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link text-center "
                    aria-current="page"
                    to="/signin"
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
