import React, { useState } from "react";
import FilterPopup from "./FilterPopup";

const Filter = () => {
  const [filteredItems, setFilteredItems] = useState(items);

  const applyFilters = (filters) => {
    // Logic to filter items based on disease, distance, and cost
    // Set the filtered items in state
    setFilteredItems((filteredItems) => {
      // Apply filtering logic
      // For example:
      const filtered = items.filter((item) => {
        return (
          (!filters.disease || item.disease === filters.disease) &&
          (!filters.distance || item.distance <= parseInt(filters.distance)) &&
          (!filters.cost || item.cost <= parseInt(filters.cost))
        );
      });
      return filtered;
    });
  };

  return (
    <div>
      <FilterPopup applyFilters={applyFilters} />
    </div>
  );
};

export default Filter;
