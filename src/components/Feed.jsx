import React from "react";
import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  // State for the selected category and videos
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from the API based on the selected category
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    // Create a Stack component with a flex-direction that changes based on screen size
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "100vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {/* Render the Sidebar component */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Render the copyright notice */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright @2023 PlayStream. All rights reserved.
        </Typography>
      </Box>

      {/* Create a Box component for the videos */}
      <Box
        p={2}
        marginLeft={{ md: "none", lg: "4rem" }}
        overflowY="auto"
        height="100%"
        flex={2}
      >
        {/* Render the selected category and videos */}
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        {/* Render the Videos component */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
