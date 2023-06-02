import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      margin={{ md: "auto", lg: "5rem" }}
      p={2}
      overflowY="auto"
      height="100%"
      flex={2}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "#fff" }}
      >
        Search Results For
        <span style={{ color: "#FC1503" }}> {searchTerm} </span>
      </Typography>
      Videos
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
