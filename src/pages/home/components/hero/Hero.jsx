import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../../../../theme/theme";
import HeroContent from "./components/HeroContent";
import ReviewSlider from "./components/ReviewSlider";
import StatsBar from "./components/StatsBar";

const height = "100vh";

const Hero = () => {
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    height: height,
                    width: "100%",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
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
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <HeroContent />
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 5 }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: { xs: 4, md: 0 },
                        }}
                    >
                        <ReviewSlider />
                    </Grid>
                </Grid>

                <StatsBar />
            </Box>

            {/* Spacer for layout consistency */}
            <Box sx={{ height: height }} />
        </>
    );
};

export default Hero;
