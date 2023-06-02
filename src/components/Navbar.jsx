import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";

const Navbar = () => (
  // Create a horizontal stack container for the Navbar components
  <Stack
    direction={"row"}
    alignItems={"center"}
    p={2}
    sx={{
      position: "sticky",
      top: "0",
      justifyContent: "space-between",
      backgroundColor: "#000",
    }}
  >
    {/* Create a Link component to navigate to the homepage */}
    <Link to={"/"}>
      {/* Display the logo image */}
      <img src={logo} alt="logo" style={{ height: "45px" }} />
    </Link>

    {/* Render the SearchBar component */}
    <SearchBar />
  </Stack>
);

export default Navbar;
