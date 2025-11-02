import React from "react";
import { Box, Grid } from "@mui/material";
import HeroContent from "./components/HeroContent";
import ReviewSlider from "./components/ReviewSlider";
import StatsBar from "./components/StatsBar";

const height = "75vh";

const Hero = () => {
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    height,
                    width: "100%",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
                        url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: { xs: 3, md: 10 },
                    overflow: "hidden",
                }}
            >
                <Grid
                    container
                    spacing={4}
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    {/* Left Side - Hero Text and Search */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <HeroContent />
                    </Grid>

                    {/* Right Side - Reviews */}
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <ReviewSlider />
                    </Grid>
                </Grid>

                {/* Stats Section at Bottom */}
                {/* <StatsBar /> */}
            </Box>

            {/* Spacer to keep layout consistent below hero */}
            {/* <Box sx={{ height }} /> */}
        </>
    );
};

export default Hero;
