import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Feed,
 
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => (
  // Set up the main application component using BrowserRouter for routing
  <BrowserRouter>
    {/* Create a container box with a black background color */}
    <Box sx={{ backgroundColor: "#000" }}>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Define the routes and their corresponding components */}
      <Routes>
        {/* Render the Feed component when the path is exactly "/" */}
        <Route path="/" exact element={<Feed />} />

        {/* Render the VideoDetail component when the path matches "/video/:id" */}
        <Route path="/video/:id" element={<VideoDetail />} />

        

        {/* Render the SearchFeed component when the path matches "/search/:searchTerm" */}
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
