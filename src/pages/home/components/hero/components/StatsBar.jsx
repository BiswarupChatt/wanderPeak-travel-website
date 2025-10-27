import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const stats = [
    { number: 10000, label: "Reviews", suffix: "+" },
    { number: 80000, label: "Satisfied Travelers", suffix: "+" },
    { number: 50, label: "Destinations", suffix: "+" },
    { number: 8, label: "Experience", suffix: " Years" },
];

const StatsBar = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const duration = 2000; // Animation duration in milliseconds
        const steps = 50; // Number of steps in the animation
        const stepTime = duration / steps;

        stats.forEach((stat, index) => {
            const increment = stat.number / steps;
            let current = 0;
            let step = 0;

            const timer = setInterval(() => {
                step++;
                current += increment;
                
                setCounts(prevCounts => {
                    const newCounts = [...prevCounts];
                    newCounts[index] = step === steps ? stat.number : Math.floor(current);
                    return newCounts;
                });

                if (step === steps) {
                    clearInterval(timer);
                }
            }, stepTime);
        });
    }, []);

    return (
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
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0,0,0,0) 100%)",
                flexWrap: "wrap",
            }}
        >
            {stats.map((item, index) => (
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
                        {counts[index]}{item.suffix}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {item.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default StatsBar;
