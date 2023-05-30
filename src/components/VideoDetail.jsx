import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import { Video } from "./";
import { fetchFromAPI } from "../utilis/fetchFromAPI";

const VideoDetail = () => {
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideos(data.items[0])
    );
  }, [id]);

  const { snippet :{
    title,channelId,channelTitle     
  } , statistics:{
    viewCount,likeCount
  } } = videos;


  if (!videos) {
    return null; // You can return a loader or any other placeholder while waiting for the API response
  }

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videos.snippet.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
