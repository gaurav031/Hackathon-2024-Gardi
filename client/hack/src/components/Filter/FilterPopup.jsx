import React, { useState } from "react";
import "./FilterPopup.css"; // Import CSS file for styling

const FilterPopup = ({ applyFilters, togglePopup }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [diseaseOptions, setDiseaseOptions] = useState([
    { label: "Disease 1", checked: false },
    { label: "Disease 2", checked: false },
    { label: "Disease 3", checked: false },
    { label: "Disease 4", checked: false },
    { label: "Disease 5", checked: false },
  ]);
  const [additionalDisease, setAdditionalDisease] = useState("");
  const [costProgress, setCostProgress] = useState(0);
  const [locationProgress, setLocationProgress] = useState(0);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleApplyFilters = () => {
    // Apply filters based on the selected category and options
    if (selectedCategory === "disease") {
      const selectedOptions = diseaseOptions
        .filter((option) => option.checked)
        .map((option) => option.label);
      if (additionalDisease.trim() !== "") {
        selectedOptions.push(additionalDisease);
      }
      applyFilters({ category: selectedCategory, options: selectedOptions });
    } else {
      applyFilters(selectedCategory);
    }
    togglePopup(); // Close the popup after applying filters
  };

  const handleDiseaseOptionChange = (index) => {
    const newOptions = [...diseaseOptions];
    newOptions[index].checked = !newOptions[index].checked;
    setDiseaseOptions(newOptions);
  };

  return (
    <div className="filter-container" id="main">
      <div className="filter-popup">
        <div className="filter-section">
          <center>
            <h3>
              <u>Choose a Category</u>
            </h3>
          </center>
          <label>
            <input
              type="radio"
              name="category"
              value="disease"
              checked={selectedCategory === "disease"}
              onChange={() => handleCategoryChange("disease")}
            />
            Disease
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="category"
              value="cost"
              checked={selectedCategory === "cost"}
              onChange={() => handleCategoryChange("cost")}
            />
            Cost
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="category"
              value="location"
              checked={selectedCategory === "location"}
              onChange={() => handleCategoryChange("location")}
            />
            Location
          </label>
        </div>
        {selectedCategory === "disease" && (
          <div className="filter-section">
            <h3>Disease Options</h3>
            {diseaseOptions.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={() => handleDiseaseOptionChange(index)}
                />
                {option.label}
              </label>
            ))}
            <input
              type="text"
              value={additionalDisease}
              placeholder="Additional Disease"
              onChange={(e) => setAdditionalDisease(e.target.value)}
            />
          </div>
        )}
        {selectedCategory === "cost" && (
          <div>
            <div className="filter-section">
              <h3>Cost (Rs0 - Rs10000)</h3>
              <input
                type="range"
                min="0"
                max="10000"
                value={costProgress}
                onChange={(e) => setCostProgress(Number(e.target.value))}
                className="cost-progress-bar" // Add CSS class here
              />
              <span>Rs{costProgress}</span>
            </div>
            <div className="filter-section">
              {/* Placeholder for cost-related options */}
            </div>
          </div>
        )}
        {selectedCategory === "location" && (
          <div className="filter-section">
            <h3>Location (0km - 50km)</h3>
            <input
              type="range"
              min="0"
              max="50"
              value={locationProgress}
              onChange={(e) => setLocationProgress(Number(e.target.value))}
              className="location-progress-bar" // Add CSS class here
            />
            <span>{locationProgress} km</span>
          </div>
        )}
        <center>
          <button onClick={handleApplyFilters}>Apply Filters</button>
        </center>
      </div>
    </div>
  );
};

export default FilterPopup;
