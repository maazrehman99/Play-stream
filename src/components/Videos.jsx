import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Videocard, Channelcard } from "./";

const Videos = ({ videos, direction }) => {

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={"start"}
      gap={2}
    >
      {/* Map through the videos and render the Videocard for each video */}
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* Render the Videocard only if videoId exists */}
          {item.id.videoId && <Videocard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
