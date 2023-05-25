import React, { useState } from "react";

const CrewSearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        className="form-control"
        type="text"
        placeholder="Rechercher un astronaute..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default CrewSearchComponent;
