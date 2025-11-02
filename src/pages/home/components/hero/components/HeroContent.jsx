import React, { useState, useEffect } from "react";
import { Typography, Box, InputBase, Button } from "@mui/material";
import theme from "../../../../../theme/theme";
import SearchIcon from "@mui/icons-material/Search";
import { useTypingEffect } from "../../../../../components/TypeWriterEffect";


const HeroContent = () => {
    const destinations = ["Bhutan", "Meghalaya", "Cherrapunji", "Sikkim"];
    const currentPlace = useTypingEffect(destinations); 

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", md: "center", lg: "flex-start" },
                textAlign: { xs: "center", md: "left", lg: "left" },
                px: { xs: 2, sm: 4, md: 6, lg: 10 },
            }}
        >
            <Box sx={{ maxWidth: 700, width: "100%" }}>
                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        lineHeight: 1.2,
                        fontSize: {
                            xs: "2.4rem",
                            sm: "3rem",
                            md: "3.6rem",
                            lg: "4.2rem",
                        },
                    }}
                >
                    Book Your <br /> Trip to{" "}
                    <Box
                        component="span"
                        sx={{
                            color: theme.palette.secondary.main,
                        }}
                    >
                        {currentPlace}
                    </Box>
                </Typography>

                {/* Subline */}
                <Typography
                    sx={{
                        mt: 2,
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                        fontWeight: 400,
                    }}
                >
                    <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                        Wander
                    </Box>{" "}
                    | Travel |{" "}
                    <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                        Connect
                    </Box>{" "}
                    | Repeat
                </Typography>

                {/* Tagline */}
                <Typography
                    sx={{
                        mt: 1,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        color: "rgba(255,255,255,0.9)",
                    }}
                >
                    Where Adventure meets Community
                </Typography>

                {/* 🔍 Search Bar */}
                <Box
                    sx={{
                        mt: 3,
                        width: { xs: "100%", sm: "80%", md: "70%", lg: "400px" },
                        display: "flex",
                        mx: { xs: "auto", md: 0 },
                        alignItems: "center",
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: "50px",
                        backdropFilter: "blur(6px)",
                        px: 2,
                        py: 0.5,
                    }}
                >
                    <InputBase
                        placeholder={`Search destinations, ${currentPlace}`}
                        sx={{
                            color: "#fff",
                            flex: 1,
                            fontSize: "0.95rem",
                            "::placeholder": {
                                color: "rgba(255,255,255,0.7)",
                            },
                        }}
                    />
                    <SearchIcon
                        sx={{
                            color: "rgba(255,255,255,0.7)",
                            mr: 1.5,
                            fontSize: "1.4rem",
                        }}
                    />
                </Box>

            </Box>
        </Box >
    );
};

export default HeroContent;
