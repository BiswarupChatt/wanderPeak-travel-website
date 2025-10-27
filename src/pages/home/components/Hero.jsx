import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
    Grid,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import theme from "../../../theme/theme";

const reviews = [
    {
        name: "M",
        text: "Just got back from a week-long, 20–26th January, all girls tour package of Manali–Kasol–Jibhi.",
    },
    {
        name: "G",
        text: "December 2023 New Year – I’ve recently done Jaisalmer weekend trip, accommodation in Jaisalmer was perfect!",
    },
    {
        name: "A",
        text: "The Kashmir Great Lake Trek with JustWravel was an absolute dream come true. Words can’t fully capture it!",
    },
    {
        name: "R",
        text: "An unforgettable Meghalaya trip — amazing waterfalls, homestays, and super friendly group!",
    },
    {
        name: "S",
        text: "Our Spiti Valley road trip was beyond expectations. The team managed everything flawlessly!",
    },
    {
        name: "T",
        text: "Leh-Ladakh bike expedition was thrilling! Excellent guides and great company all through.",
    },
];

const locations = ["Meghalaya", "Goa", "Manali", "Ladakh", "Kerala"];

const height = "100vh"

const Hero = () => {
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    opacity: 0.9,
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
                    {/* Left Text Content */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: "bold",
                                lineHeight: 1.2,
                                fontSize: { xs: "2.5rem", md: "4rem" },
                            }}
                        >
                            Book Your <br /> Trip to{" "}
                            <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                                Meghalaya
                            </Box>
                        </Typography>
                    </Grid>

                    {/* Right Side - Swiper Reviews */}
                    <Grid
                        size={{ xs: 12, md: 5 }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: { xs: 4, md: 0 },
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: 400,
                            }}
                        >
                            <Swiper
                                direction="vertical"
                                slidesPerView={2}
                                spaceBetween={20}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                loop
                                modules={[Autoplay]}
                                style={{ height: "350px" }}
                            >
                                {reviews.map((review, index) => (
                                    <SwiperSlide key={index}>
                                        <Box
                                            sx={{
                                                background: "rgba(255, 255, 255, 0.08)",
                                                borderRadius: "16px",
                                                p: 3,
                                                color: "#fff",
                                                backdropFilter: "blur(8px)",
                                                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 1.5,
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                    background: "rgba(255,255,255,0.12)",
                                                },
                                            }}
                                        >
                                            {/* Header (Avatar + Stars) */}
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                                <Box
                                                    sx={{
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: "50%",
                                                        background: "linear-gradient(135deg, #00B4DB, #0083B0)",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        fontWeight: "bold",
                                                        fontSize: "1.1rem",
                                                    }}
                                                >
                                                    {review.name}
                                                </Box>
                                                <Typography sx={{ color: "#FFD700", fontSize: "1rem" }}>★★★★★</Typography>
                                            </Box>

                                            {/* Review Text */}
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    lineHeight: 1.5,
                                                    fontSize: "0.95rem",
                                                    opacity: 0.95,
                                                }}
                                            >
                                                {review.text}
                                            </Typography>
                                        </Box>

                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Grid>
                </Grid>

                {/* Stats Bar (Bottom Fixed Inside Hero) */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        py: 3,
                        background:
                            "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0,0,0,0) 100%)",
                        // backdropFilter: "blur(1px)",
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        { number: "10000+", label: "Reviews" },
                        { number: "80000+", label: "Satisfied Travelers" },
                        { number: "50+", label: "Destinations" },
                        { number: "8 Years", label: "Experience" },
                    ].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                textAlign: "center",
                                minWidth: { xs: "40%", sm: "20%" },
                                mb: { xs: 2, sm: 0 },
                                color: "#fff",
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                {item.number}
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ height: height }}>

            </Box>
        </>
    );
};

export default Hero;
