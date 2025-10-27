import React from "react";
import { Box, Typography } from "@mui/material";

const ReviewCard = ({ review }) => {
    return (
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
            {/* Header */}
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

            {/* Text */}
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
    );
};

export default ReviewCard;
