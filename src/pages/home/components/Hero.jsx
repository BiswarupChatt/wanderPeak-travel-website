// Hero.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
    return (
        <Box
            component="section"
            sx={{
                height: "70vh",
                width: "100%",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                px: 2, // padding on sides for small screens
            }}
        >
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                Welcome to My Website
            </Typography>
            <Typography variant="h5">
                Crafting amazing experiences from code to design
            </Typography>
        </Box>
    );
};

export default Hero;
