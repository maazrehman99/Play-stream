import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utilis/constant";
import SearchBar from "./SearchBar";

const Navbar = () => (
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
    <Link to={'/'}>
      <img src={logo} alt="logo" style={{ height:"45px" }} />
    
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
