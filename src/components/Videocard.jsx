import React from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoVideoDescription,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl,
} from "../utilis/constant";
const Videocard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card sx={{ width: {md: "300px", xs: "100%"}, boxShadow: "none" , borderRadius: "0"}}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: 358, height: 180 }}
      ></CardMedia>
    </Link>
    <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default Videocard;
