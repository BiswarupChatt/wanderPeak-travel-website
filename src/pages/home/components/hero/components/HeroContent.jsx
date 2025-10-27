import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import theme from "../../../../../theme/theme";

const HeroContent = () => {
    const places = ["Meghalaya", "Cherrapunji", "Shillong", "Dawki"];
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
                {currentPlace}
            </Box>
        </Typography>
    );
};

export default HeroContent;
