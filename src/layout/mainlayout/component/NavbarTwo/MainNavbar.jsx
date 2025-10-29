import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";

export default function MainNavbar() {
    return (
        <AppBar
            position="fixed"
            sx={{
                bgcolor: "#0B1B2B",
                height: 64,
                display: "flex",
                justifyContent: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                zIndex: 1100,
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: 25, height: 25, bgcolor: "#FDD835", clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        VEENA WORLD
                    </Typography>
                </Box>

                {/* Search Box */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "white",
                        borderRadius: 50,
                        px: 2,
                        py: 0.5,
                        width: "40%",
                    }}
                >
                    <SearchIcon sx={{ color: "gray", mr: 1 }} />
                    <input
                        type="text"
                        placeholder='Search "Gulmarg"'
                        style={{
                            border: "none",
                            outline: "none",
                            flex: 1,
                            fontSize: 14,
                            background: "transparent",
                        }}
                    />
                </Box>

                {/* Right Side */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Typography
                        sx={{
                            color: "#FDD835",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: 15,
                        }}
                    >
                        Travel Planner 2025
                    </Typography>

                    <Button
                        variant="contained"
                        startIcon={<PhoneIcon />}
                        sx={{
                            bgcolor: "#1A73E8",
                            borderRadius: 5,
                            textTransform: "none",
                            fontWeight: 600,
                            "&:hover": { bgcolor: "#125ABE" },
                        }}
                    >
                        1800 313 5555
                    </Button>

                    <Typography sx={{ cursor: "pointer" }}>Sign In</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
