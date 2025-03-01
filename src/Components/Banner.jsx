import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg,rgba(29, 241, 249, 0.47) 0%,rgb(37, 252, 184),rgba(123, 252, 37, 0.38) 100%)", // Gradient effect
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 8,
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Stronger shadow for contrast
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Playfair Display', serif",
              color: "#fff", // White text for contrast
              textShadow: "2px 2px 6px rgba(0,0,0,0.2)", // Enhanced text shadow
            }}
          >
            "Vishal Bazar – Your Ultimate Shopping Destination!"
          </Typography>

          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              color: "#FFD70", // Gold for a luxury feel
              fontWeight: "bold",
              pb: 3,
              mt: 2,
              fontFamily: "'Poppins', sans-serif",
              textShadow: "1px 1px 3px rgba(0,0,0,0.2)", // Slight glow effect
            }}
          >
            Wide Selection, Best Prices, and Unmatched Convenience!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
