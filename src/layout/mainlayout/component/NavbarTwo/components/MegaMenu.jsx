import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

// Recursive Component (same as your improved one)
const RecursiveMenu = ({ data }) => {
    if (!data) return null;

    if (data.items) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {data.items.map((item, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                            transition: "color 0.2s",
                        }}
                    >
                        <Typography
                            component={item.path ? Link : "div"}
                            to={item.path || undefined}
                            sx={{
                                fontSize: 14,
                                color: "inherit",
                                textDecoration: "none",
                                "&:hover": { color: "#FDD835" },
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        );
    }

    if (data.subcategories) {
        return (
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: `repeat(${Math.min(data.subcategories.length, 4)}, 1fr)`,
                    },
                    gap: 4,
                    minWidth: 700,
                }}
            >
                {data.subcategories.map((sub, i) => (
                    <Box key={i}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 1,
                                fontSize: 15,
                                color: "#0E1B2A",
                                borderBottom: "2px solid #FDD835",
                                display: "inline-block",
                                pb: 0.5,
                            }}
                        >
                            {sub.title}
                        </Typography>

                        <Box sx={{ mt: 1 }}>
                            <RecursiveMenu data={sub} />
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    }

    return null;
};

export default function MegaMenu({ menu, onPanelMouseEnter, onPanelMouseLeave }) {
    return (
        <Box
            onMouseEnter={onPanelMouseEnter}
            onMouseLeave={onPanelMouseLeave}
            sx={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "white",
                color: "black",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                zIndex: 9999,
                minWidth: 700,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                mt: 1,
                pointerEvents: "auto", // ensure it receives pointer events
            }}
        >
            <Box>
                <Typography
                    component={menu.path ? Link : "div"}
                    to={menu.path || undefined}
                    sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#0E1B2A",
                        mb: 1,
                        textDecoration: "none",
                    }}
                >
                    {menu.title}
                </Typography>
                <Divider sx={{ borderColor: "#FDD835", opacity: 0.7 }} />
            </Box>

            <RecursiveMenu data={menu} />
        </Box>
    );
}
