import React from "react";
import "../../App.css";
import "./Home.css";
import img from '../../img/hospital.jpg'
import img1 from '../../img/breadcumb1.jpg'
import img2 from '../../img/breadcumb3.jpg'
import img3 from '../../img/lab.avif'
import d1 from '../../img/d1.jpeg';
import d2 from '../../img/d2.jpeg';
import d3 from '../../img/d3.jpeg';
import d4 from '../../img/d4.jpeg';
import d5 from '../../img/d5.jpeg';
import d6 from '../../img/d6.jpeg';
import d7 from '../../img/d7.jpeg';
import d8 from '../../img/d8.jpeg';
import d9 from '../../img/d9.jpeg';
import d10 from '../../img/d10.jpeg';
import d11 from '../../img/d11.jpeg';
import d12 from '../../img/d12.jpeg';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="home" className="welcome-hero">
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>
              best place to find Hospitals
              <br /> at very affodable cost!{" "}
            </h2>
            <p>
              Find Best Hospital with best facility and affodable Cost in just
              One click
            </p>
          </div>
          <div className="welcome-hero-serch-box">
          <button
                className="welcome-hero-btn"
                onclick="window.location.href='#'"
              >
                Filter 
              </button>
            <div className="welcome-hero-form">
              <div className="single-welcome-hero-form">
                <h3>Hospital</h3>
                <form action="index.html">
                  <input type="text" placeholder="Search the Hospital Name" />
                </form>
                <div className="welcome-hero-form-icon">
                  <i className="fa fa-bars" />
                </div>
              </div>
              <div className="single-welcome-hero-form">
                <h3>location</h3>
                <form action="home.html">
                  <input type="text" placeholder="search the city" />
                </form>
                <div className="welcome-hero-form-icon">
                  <i className="fa fa-map-pin" />
                </div>
              </div>
            </div>
            <div className="welcome-hero-serch">
              <button
                className="welcome-hero-btn"
                onclick="window.location.href='#'"
              >
                search <i data-feather="search" />
              </button>
             
            </div>
          </div>
        </div>
      </section>

      <section id="list-topics" className="list-topics">
        <div className="container">
          <div className="list-topics-content">
            <ul>
              <li>
                <div className="single-list-topics-content">
                  <div className="single-list-topics-icon">
                    <img src={img} alt="" />
                  </div>
                  <h2>
                    <a href="#">Best Of Doctor</a>
                  </h2>
                  <p>2000+ listings</p>
                </div>
              </li>
              <li>
                <div className="single-list-topics-content">
                  <div className="single-list-topics-icon">
                    <img src={img1} alt="" />
                  </div>
                  <h2>
                    <a href="#">Digital Health card</a>
                  </h2>
                  <p>Get it Now</p>
                </div>
              </li>
              <li>
                <div className="single-list-topics-content">
                  <div className="single-list-topics-icon">
                    <img src={img2} alt="" />
                  </div>
                  <h2>
                    <a href="#">Best Of Doctors</a>
                  </h2>
                  <p>specialists</p>
                </div>
              </li>
              <li>
                <div className="single-list-topics-content">
                  <div className="single-list-topics-icon">
                    <img src={img3} alt="" />
                  </div>
                  <h2>
                    <a href="#">Best Of Laboratory</a>
                  </h2>
                  <p>1500+ listings</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="explore" className="explore">
        <div className="container">
          <div className="section-header">
            <h2>Hospitals List</h2>
          </div>
          {/*/.section-header*/}
          <div className="explore-content">
            <div className="row">
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d1} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Sai Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">1000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                         <NavLink to={'/book'}>
                            <button className="close-btn btn-danger">
                              <span style={{ color: "white",}}>
                                Book Appointment
                              </span>
                            </button>
                            </NavLink>
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d2} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Ram Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">3000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                        <NavLink to={'/book'}>
                            <button className="close-btn btn-danger">
                              <span style={{ color: "white",}}>
                                Book Appointment
                              </span>
                            </button>
                            </NavLink>
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d3}alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Vednta Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">3000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d4} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Himalaya Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">6000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d5} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Tej Clinic</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">1000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d6} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">dental Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">1000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d7} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Max Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">10000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d8} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Artemis Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">7000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d9} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Nanavati Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">1000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d10} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">RVM Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">700</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d11} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Apollo Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">5000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={d12} alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onclick="window.location.href='#'">
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt" />
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">Fortis Hospital</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        Fees
                        <span className="explore-price">6000</span>
                      </span>
                    </p>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn btn-danger"
                            href="booking.html"
                          >
                            <span style={{ color: "white" }}>
                              Book Appointment
                            </span>
                          </button>{" "}
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              {" "}
                              <i className="fa fa-map-pin" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.container*/}
      </section>
    </>
  );
}

export default Home;
