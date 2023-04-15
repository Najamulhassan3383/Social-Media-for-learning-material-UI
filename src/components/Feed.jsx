import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

function Feed() {
  return (
    <Box
      p={2}
      flex={4}
      sx={{
        display: {
          xs: "block", // Display "none" on extra small screens
          sm: "block", // Display "block" on small screens
        },
      }}
    >
      <Post img={require("./images/baby-4100420__340.jpg")} name="zain" />
      <Post img={require("./images/bride-1822488__340.jpg")} name="Ali" />
      <Post img={require("./images/woman-1284411__340.jpg")} name="Aiain" />
      <Post img={require("./images/swimmer-1678307__340.jpg")} name="Hadi" />
      <Post
        img={require("./images/worried-girl-413690__340.jpg")}
        name="Arif"
      />
      <Post img={require("./images/eye-7787024__340.jpg")} name="Humna" />
      <Post img={require("./images/lion-3012515__340.jpg")} name="Rao" />
    </Box>
  );
}

export default Feed;
