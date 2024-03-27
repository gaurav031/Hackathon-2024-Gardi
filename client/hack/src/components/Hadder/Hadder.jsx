import "./Hadder.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Hadder = () => {
  const { userLogin } = useSelector((store) => store.login);
  console.log(userLogin);
  return (
    <div>
      <header className="header-area">
        <div className="main-header-area" id="stickyHeader">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 h-100">
                <div className="main-menu h-100">
                  <nav className="navbar h-100 navbar-expand-lg">
                    <NavLink className="navbar-brand" id="logo" to="/">
                      <img src={logo} alt="Logo" />
                    </NavLink>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#medilifeMenu"
                      aria-controls="medilifeMenu"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="home">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/">
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/about">
                            About Us
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Services">
                            Services
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/contact">
                            Contact
                          </NavLink>
                        </li>

                        {userLogin && (
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">
                              Profile
                            </NavLink>
                          </li>
                        )}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hadder;
