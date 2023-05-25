import React, {useState} from "react";

const CrewSearchComponent = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div>
            <input
                className="form-control"
                type="search"
                placeholder="Rechercher un astronaute..."
                value={searchTerm}
                onChange={handleSearch}
                style={{width: "350px"}}
            />
        </div>
    );
};

export default CrewSearchComponent;
