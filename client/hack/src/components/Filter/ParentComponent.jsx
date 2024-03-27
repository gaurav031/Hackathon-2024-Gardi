import React, { useState } from "react";
import FilterPopup from "./FilterPopup"; // Assuming you have a FilterPopup component

const ParentComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prevShowPopup) => !prevShowPopup);
  };

  const applyFilters = (filters) => {
    // Logic to apply filters
    console.log("Applying filters:", filters);
    // Close the popup after applying filters
    togglePopup();
  };

  return (
    <div>
      <button className="btn btn-primary submit-btn" onClick={togglePopup}>
        Filter
      </button>
      {showPopup && (
        <FilterPopup applyFilters={applyFilters} togglePopup={togglePopup} />
      )}
    </div>
  );
};

export default ParentComponent;
