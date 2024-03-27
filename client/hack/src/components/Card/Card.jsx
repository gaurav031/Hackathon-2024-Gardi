import React from 'react'
import c3 from '../../img/c3.png';
import qr from '../../img/qr.png'

function Card() {
  return (
    <div className="hcard-body">
    <div className="health-card">
      <div className="profile-section">
        <img
          src={c3}
          alt="Profile Picture"
          className="profile-pic"
        />
        <div>
          <h2>Ankit Sharma</h2>
          <p>Age: 30</p>
        </div>
        <img src={qr} alt="QR Code" className="qr-code" />
      </div>
      <div className="details-section">
        <div className="patient-details">
          <h3>Patient Details</h3>
          <p>Blood Type: A+</p>
          <p>Height: 175 cm</p>
          <p>Weight: 70 kg</p>
          <p>Doctor 's Name: Dr. Smith</p>
          <button style={{ backgroundColor: "red", color: "#fff" }}>
            Medicine alarm
          </button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Card
