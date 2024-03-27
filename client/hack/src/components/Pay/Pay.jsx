import React from 'react';
import img from '../../img/c3.png';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

function Pay() {
    const navigate = useNavigate();

    const handleConfirmAndPay = () => {
        navigate("/profile"); // Corrected path for navigating to the "profile" page
    };

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                {/* Checkout Form */}
                                <form>
                                    {/* Personal Information */}
                                    <div className="info-widget" >
                                        <h4 className="card-title">Personal Information</h4>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label>First Name</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label>Last Name</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label>Email</label>
                                                    <input className="form-control" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label>Phone</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="exist-customer">
                                            <a >Existing Customer? Click here to login</a>
                                        </div>
                                    </div>
                                    {/* /Personal Information */}
                                    <div className="payment-widget">
                                        <h4 className="card-title">Payment Method</h4>
                                        {/* Payment options */}
                                        <div className="payment-list">
                                            {/* Credit Card Payment */}
                                            {/* Input fields for credit card payment */}
                                        </div>
                                        {/* Paypal Payment */}
                                        <div className="payment-list">
                                            {/* Paypal payment option */}
                                        </div>
                                        {/* /Paypal Payment */}
                                        {/* Terms Accept */}
                                        <div className="terms-accept">
                                            <div className="custom-checkbox">
                                                <input type="checkbox" id="terms_accept" />
                                                <label htmlFor="terms_accept">
                                                    I have read and accept <a href="#">Terms &amp; Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        {/* /Terms Accept */}
                                        {/* Submit Section */}
                                        <div className="submit-section mt-4">
                                            <button type="button" className="btn btn-primary submit-btn" onClick={handleConfirmAndPay}>
                                                Confirm and Pay
                                            </button>
                                        </div>
                                        {/* /Submit Section */}
                                    </div>
                                </form>
                                {/* /Checkout Form */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 theiaStickySidebar">
                        {/* Booking Summary */}
                        <div className="card booking-card">
                            <div className="card-header">
                                <h4 className="card-title">Booking Summary</h4>
                            </div>
                            <div className="card-body">
                                {/* Booking Doctor Info */}
                                <div className="booking-doc-info">
                                    <a href="#" className="booking-doc-img">
                                        <img src={img} alt="User Image" />
                                    </a>
                                    <div className="booking-info">
                                        <h4>
                                            <a href="#">Dr. Gaurav</a>
                                        </h4>
                                        <div className="clinic-details">
                                            <p className="doc-location">
                                                <i className="fas fa-map-marker-alt" /> Rajkot, Gujarat
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-summary">
                                    <div className="booking-item-wrap">
                                        <ul className="booking-date">
                                            <li>
                                                Date <span>16 Nov 2019</span>
                                            </li>
                                            <li>
                                                Time <span>10:00 AM</span>
                                            </li>
                                        </ul>
                                        <ul className="booking-fee">
                                            <li>
                                                Consulting Fee <span>800</span>
                                            </li>
                                            <li>
                                                Booking Fee <span>2000</span>
                                            </li>
                                            <li>
                                                Video Call <span>500</span>
                                            </li>
                                        </ul>
                                        <div className="booking-total">
                                            <ul className="booking-total-list">
                                                <li>
                                                    <span>Total</span>
                                                    <span className="total-cost">3300</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Booking Summary */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;
