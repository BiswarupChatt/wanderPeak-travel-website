import React, { useState, useEffect } from "react";
import { Typography, Box, InputBase, Button } from "@mui/material";
import theme from "../../../../../theme/theme";

const HeroContent = () => {
    const places = ["Bhutan", "Meghalaya", "Cherrapunji", "Sikkim"];
    const [currentPlace, setCurrentPlace] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const currentWord = places[currentIndex];
        if (isTyping) {
            if (currentPlace !== currentWord) {
                const timeoutId = setTimeout(() => {
                    setCurrentPlace(currentWord.slice(0, currentPlace.length + 1));
                }, 150);
                return () => clearTimeout(timeoutId);
            } else {
                setTimeout(() => setIsTyping(false), 1000);
            }
        } else {
            if (currentPlace === "") {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length);
                setIsTyping(true);
            } else {
                const timeoutId = setTimeout(() => {
                    setCurrentPlace(currentPlace.slice(0, currentPlace.length - 1));
                }, 100);
                return () => clearTimeout(timeoutId);
            }
        }
    }, [currentPlace, currentIndex, isTyping]);

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 700,
                    lineHeight: 1.2,
                    fontSize: { xs: "2.5rem", md: "4rem" },
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

            <Typography
                sx={{
                    mt: 2,
                    fontSize: { xs: "1rem", md: "1.2rem" },
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

            <Typography
                sx={{
                    mt: 1,
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.9)",
                }}
            >
                Where Adventure meets Community
            </Typography>

            {/* Search Bar */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 4,
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "50px",
                    p: "4px",
                    backdropFilter: "blur(8px)",
                    width: "fit-content",
                }}
            >
                <InputBase
                    placeholder="Type Location... (min. 3)"
                    sx={{
                        px: 2,
                        py: 1,
                        color: "#fff",
                        width: { xs: "200px", md: "300px" },
                        fontSize: "0.95rem",
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        background: "#007AFF",
                        color: "#fff",
                        borderRadius: "40px",
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        "&:hover": {
                            background: "#0060D1",
                        },
                    }}
                >
                    Search
                </Button>
            </Box>
        </Box>
    );
};

export default HeroContent;
