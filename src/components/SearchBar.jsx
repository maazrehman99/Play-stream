import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  // Initialize state for the search term
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      // Navigate to the search page with the search term as a parameter
      navigate(`/search/${searchTerm}`);

      // Clear the search term after navigation
      setSearchTerm("");
    }
  };

  return (
    // Create a Paper component as a form for the search bar
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      {/* Create an input field for the search term */}
      <input
        className="search-bar"
        placeholder="search.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Create an IconButton for submitting the search */}
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
