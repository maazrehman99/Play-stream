import React from "react";
import { CardContent, CardMedia, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utilis/constant";

const Channelcard = ({ channeldetail }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        

       
        
      }}
    >
      <Link to={`/channe/${channeldetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
           
          }}
        >
          <CardMedia
           image={channeldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channeldetail?.snippet?.title}
           sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channeldetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
         </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default Channelcard;
