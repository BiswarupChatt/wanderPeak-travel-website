import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import MegaMenu from "../NavbarTwo/components/MegaMenu";
import { MENU_ITEMS } from "./components/menu_item";

export default function SecondaryNavbar({ visible }) {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    return (
        <AppBar
            position="fixed"
            sx={{
                top: visible ? 64 : 0, // appears below main navbar
                // height: 42,
                bgcolor: "#0E1B2A",
                color: "white",
                transition: "top 0.4s ease-in-out",
                zIndex: 1000,
                boxShadow: "none",
            }}
        >
            <Toolbar
                // disableGutters
                sx={{
                    justifyContent: "center",
                    gap: 4,
                    minHeight: 42,
                    position: "relative",
                    px: 4,
                }}
            >
                {MENU_ITEMS.map((menu, i) => (
                    <Box
                        key={i}
                        sx={{ position: "relative" }}
                        onMouseEnter={() => setHoveredMenu(i)}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                cursor: "pointer",
                                fontWeight: hoveredMenu === i ? 600 : 400,
                                textTransform: "none",
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center",
                                borderBottom: hoveredMenu === i ? "2px solid #FDD835" : "2px solid transparent",
                                transition: "all 0.2s ease",
                                pb: "2px",
                                "&:hover": { color: "#FDD835" },
                            }}
                        >
                            {menu.title}
                        </Typography>
                        {hoveredMenu === i && <MegaMenu menu={menu} />}
                    </Box>
                ))}
            </Toolbar>
        </AppBar>
    );
}
