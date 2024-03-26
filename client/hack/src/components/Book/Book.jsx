import React from "react";
import { NavLink } from "react-router-dom";

import "./Book.css";
import "bootstrap/dist/css/bootstrap.min.css";
import c1 from "../../img/c2.png";

const Book = () => {
  return (
    <div className="main-wrapper">
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body row">
                  <div className="booking-doc-info col-9">
                    <NavLink to="/lock" className="booking-doc-img">
                      <img src={c1} alt="User Image" />
                    </NavLink>
                    <div className="booking-info">
                      <h4>
                        <NavLink to="/">Dr. Gaurav</NavLink>
                        <p class="text-muted mb-0">Rajkot, Gujrat</p>
                      </h4>
                    </div>
                  </div>
                  <div className="booking-doc-info col-3">
                    <center>
                      <button type="button" className="btn btn-success">
                        Video Call
                      </button>
                      <input
                        type="checkbox"
                        name="myRadio"
                        value="option1"
                        className="check"
                      />
                    </center>
                  </div>
                </div>
              </div>

              {/* Schedule Widget */}
              <div className="card booking-schedule schedule-widget mt-0">
                {/* Schedule Header */}
                <div className="schedule-header">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Day Slot */}
                      <div className="day-slot">
                        <ul>
                          {/* Day Slot Items */}
                          {/* Replace these li items with dynamic content */}
                          {/* Add key prop to li elements */}
                          <li>
                            <span>Mon</span>
                            <span class="slot-date">
                              11 Nov <small class="slot-year">2019</small>
                            </span>
                          </li>
                          <li>
                            <span>Tue</span>
                            <span class="slot-date">
                              12 Nov <small class="slot-year">2019</small>
                            </span>
                          </li>
                          <li>
                            <span>Wed</span>
                            <span class="slot-date">
                              13 Nov <small class="slot-year">2019</small>
                            </span>
                          </li>
                          <li>
                            <span>Thu</span>
                            <span class="slot-date">
                              14 Nov <small class="slot-year">2019</small>
                            </span>
                          </li>
                          <li>
                            <span>Fri</span>
                            <span class="slot-date">
                              15 Nov <small class="slot-year">2019</small>
                            </span>
                          </li>
                          <li>
                            <span>Sat</span>
                            <span class="slot-date">
                              16 Nov <small class="slot-year">2019</small>
                            </span>
                          </li>
                          <li>
                            <span>Sun</span>
                            <span class="slot-date">
                              17 Nov <small class="slot-year">2019</small>
                            </span>
                          </li>
                          {/* Add more li items for other days */}
                        </ul>
                      </div>
                      {/* /Day Slot */}
                    </div>
                  </div>
                </div>
                {/* /Schedule Header */}

                {/* Schedule Content */}
                <div className="schedule-cont">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Time Slot */}
                      <div className="time-slot">
                        <ul className="clearfix">
                          {/* Time Slot Items */}
                          {/* Replace these li items with dynamic content */}
                          <li>
                            <a class="timing" href="#">
                              <span>9:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>10:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>11:00</span> <span>AM</span>
                            </a>
                          </li>
                          <li>
                            <a class="timing" href="#">
                              <span>9:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>10:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>11:00</span> <span>AM</span>
                            </a>
                          </li>
                          <li>
                            <a class="timing" href="#">
                              <span>9:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>10:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>11:00</span> <span>AM</span>
                            </a>
                          </li>
                          <li>
                            <a class="timing" href="#">
                              <span>9:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>10:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>11:00</span> <span>AM</span>
                            </a>
                          </li>
                          <li>
                            <a class="timing" href="#">
                              <span>9:00</span> <span>AM</span>
                            </a>
                            <a class="timing selected" href="#">
                              <span>10:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>11:00</span> <span>AM</span>
                            </a>
                          </li>
                          <li>
                            <a class="timing" href="#">
                              <span>9:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>10:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>11:00</span> <span>AM</span>
                            </a>
                          </li>
                          <li>
                            <a class="timing" href="#">
                              <span>9:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>10:00</span> <span>AM</span>
                            </a>
                            <a class="timing" href="#">
                              <span>11:00</span> <span>AM</span>
                            </a>
                          </li>
                          {/* Add more time slots as needed */}
                        </ul>
                      </div>
                      {/* /Time Slot */}
                    </div>
                  </div>
                </div>
                {/* /Schedule Content */}
              </div>
              {/* /Schedule Widget */}

              {/* Submit Section */}
              <div className="submit-section proceed-btn text-right">
                <center>
                  <NavLink to="/pay" className="btn btn-primary submit-btn">
                    Proceed to Pay
                  </NavLink>
                </center>
              </div>
              {/* /Submit Section */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default Book;
