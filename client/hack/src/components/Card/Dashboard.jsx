import React from "react";
import "../../App.css";
import hero from '../../img/hero1.avif';
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
function Dashboard() {
  return (
    <>
      <section className="hero-area">
        <div className="hero-slides owl-carousel">
          <div
            className="single-hero-slide bg-img bg-overlay-white"
            style={{ backgroundImage:`url(${hero})` }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="hero-slides-content">
                    <h2 data-animation="fadeInUp" data-delay="100ms">
                      Find the Ambulance <br /> with 100% Guarantee.
                    </h2>
                    <h6 data-animation="fadeInUp" data-delay="400ms">
                      Inspired Healing, Delivered with Care – Your Satisfaction,
                      Our Success.
                    </h6>
                    <div  className="login">
                    <NavLink to="/login">
                         <span>Login/Signin</span>
                      </NavLink>
                      </div>
                      <div  className="login">
                    
                         <span>Call the Ambulance</span>
    
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="medica-about-us-area section-padding-100-20">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="medica-about-content">
                <h2>We always put our patients first</h2>
                <p>
                  Our unwavering commitment to prioritizing patients is
                  reflected in our every action. Their well-being is our
                  foremost concern, steering our decisions, innovations, and
                  care practices. Through personalized attention and
                  compassionate service, we ensure that each patient receives
                  the highest standard of care, fostering trust and promoting
                  their overall health.
                </p>
                <a href="#" className="btn medilife-btn mt-50">
                  View the services <span>+</span>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="single-service-area d-flex">
                    <div className="service-icon">
                      <i className="icon-doctor"></i>
                    </div>
                    <div className="service-content">
                      <h5>The Best Hospital</h5>
                      <p>
                        We suggest you best hospital with all the facility of
                        modern technology.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="single-service-area d-flex">
                    <div className="service-icon">
                      <i className="icon-blood-donation-1"></i>
                    </div>
                    <div className="service-content">
                      <h5>The Top Doctor</h5>
                      <p>We ensure the best of best doctor for your health.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="single-service-area d-flex">
                    <div className="service-icon">
                      <i className="icon-flask-2"></i>
                    </div>
                    <div className="service-content">
                      <h5>Laboratory</h5>
                      <p>
                        We provide you best of Laboratory with minimum cost and
                        have best equipment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="single-service-area d-flex">
                    <div className="service-icon">
                      <i className="icon-emergency-call-1"></i>
                    </div>
                    <div className="service-content">
                      <h5>Emergency Room</h5>
                      <p>Our all the Hospital have a Emergency Room.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="medilife-cool-facts-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact-area text-center mb-100">
                <i className="icon-blood-transfusion-2"></i>
                <h2>
                  <span className="counter">5632</span>
                </h2>
                <h6>Blood donations</h6>
                <p>
                  Our platform seamlessly connects all hospitals, facilitating
                  immediate access to life-saving blood. This interconnected
                  network ensures swift responses to urgent situations, saving
                  lives by providing timely access to vital resources. Trust us
                  to make a meaningful impact on healthcare, bridging gaps and
                  enhancing the efficiency of blood donation for the well-being
                  of our communities.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact-area text-center mb-100">
                <i className="icon-atoms"></i>
                <h2>
                  <span className="counter">23</span>k
                </h2>
                <h6>Patients</h6>
                <p>
                  Our hospital is privileged to serve a community of trustful
                  patients seeking treatment. With a commitment to excellence,
                  we provide a secure and reliable healthcare environment. Our
                  dedicated team ensures personalized care, fostering a strong
                  bond of confidence with our patients. Choose us for quality
                  treatment and a compassionate healthcare experience
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact-area text-center mb-100">
                <i className="icon-microscope"></i>
                <h2>
                  <span className="counter">25</span>
                </h2>
                <h6>Specialities</h6>
                <p>
                  Our platform recommends hospitals featuring specialists across
                  every field, ensuring comprehensive healthcare. With a
                  commitment to excellence, we prioritize your well-being by
                  connecting you with institutions staffed by expert
                  professionals in diverse disciplines. Trust our platform for a
                  holistic approach to healthcare, where specialized care meets
                  your unique needs.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact-area text-center mb-100">
                <i className="icon-doctor-1"></i>
                <h2>
                  <span className="counter">723</span>
                </h2>
                <h6>Doctors</h6>
                <p>
                  Every hospital within our network boasts 24-hour availability
                  of doctors. This ensures prompt medical attention and care
                  around the clock. Rest assured, our commitment to providing
                  constant access to healthcare professionals reflects our
                  dedication to meeting your medical needs at any hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      =
      <div className="medilife-gallery-area owl-carousel">
        <div className="single-gallery-item">
          <img src="img/bg-img/g1.jpeg" alt="" />
          <div className="view-more-btn">
            <a href="img/bg-img/g1.jpeg" className="btn gallery-img">
              See More +
            </a>
          </div>
        </div>

        <div className="single-gallery-item">
          <img src="img/bg-img/g2.jpeg" alt="" />
          <div className="view-more-btn">
            <a href="img/bg-img/g2.jpeg" className="btn gallery-img">
              See More +
            </a>
          </div>
        </div>

        <div className="single-gallery-item">
          <img src="img/bg-img/g3.jpeg" alt="" />
          <div className="view-more-btn">
            <a href="img/bg-img/g3.jpeg" className="btn gallery-img">
              See More +
            </a>
          </div>
        </div>

        <div className="single-gallery-item">
          <img src="img/bg-img/g4.jpeg" alt="" />
          <div className="view-more-btn">
            <a href="img/bg-img/g4.jpeg" className="btn gallery-img">
              See More +
            </a>
          </div>
        </div>
      </div>
   
   
    </>
  );
}

export default Dashboard;