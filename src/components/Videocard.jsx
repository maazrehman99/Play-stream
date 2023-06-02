import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    {/* Render a link to the video detail page */}
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      {/* Render the video thumbnail */}
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          width: { xs: "100%", sm: "100%", md: "358px" },
          height: "180px",
        }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
      {/* Render a link to the video detail page */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* Render the video title */}
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      {/* Render a link to the channel detail page */}
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        {/* Render the channel title and a check icon */}
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
