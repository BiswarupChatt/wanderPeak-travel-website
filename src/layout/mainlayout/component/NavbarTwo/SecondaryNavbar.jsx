import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import MegaMenu from "./components/MegaMenu";
import { MENU_ITEMS } from "./components/menu_item";
import { Link } from "react-router-dom";

export default function SecondaryNavbar({ visible }) {
    const [hoveredMenu, setHoveredMenu] = useState(null);
    // track whether mouse is inside the menu panel
    const menuHoveredRef = useRef(false);
    // timer to debounce closing
    const closeTimerRef = useRef(null);

    const openMenu = (index) => {
        // clear any pending close timers
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setHoveredMenu(index);
    };

    const requestCloseMenu = () => {
        // small delay so cursor transitions don't flicker
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        closeTimerRef.current = setTimeout(() => {
            // close only if cursor not inside the menu panel
            if (!menuHoveredRef.current) setHoveredMenu(null);
        }, 150); // 120-200 ms works well
    };

    const handleMenuMouseEnter = () => {
        menuHoveredRef.current = true;
        // keep menu open
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    const handleMenuMouseLeave = () => {
        menuHoveredRef.current = false;
        requestCloseMenu();
    };

    return (
        <Box
            sx={{
                position: "fixed",
                top: visible ? 64 : 0,
                left: 0,
                width: "100%",
                bgcolor: "#0E1B2A",
                color: "white",
                zIndex: 1000,
                transition: "top 0.4s ease-in-out",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                display: { xs: "none", md: "flex" }, // hidden on small screens
                justifyContent: "center",
                py: 1,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 4,
                    position: "relative",
                }}
            >
                {MENU_ITEMS.map((menu, i) => (
                    <Box
                        key={i}
                        sx={{ position: "relative" }}
                        onMouseEnter={() => openMenu(i)}
                        onMouseLeave={() => requestCloseMenu()}
                    >
                        <Typography
                            component={Link}
                            to={menu.path || "#"}
                            variant="body2"
                            sx={{
                                cursor: "pointer",
                                fontWeight: hoveredMenu === i ? 600 : 400,
                                textTransform: "none",
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center",
                                borderBottom:
                                    hoveredMenu === i
                                        ? "2px solid #FDD835"
                                        : "2px solid transparent",
                                transition: "all 0.2s ease",
                                pb: "2px",
                                color: "inherit",
                                textDecoration: "none",
                                "&:hover": { color: "#FDD835" },
                            }}
                        >
                            {menu.title}
                        </Typography>

                        {hoveredMenu === i && (
                            <MegaMenu
                                menu={menu}
                                onPanelMouseEnter={handleMenuMouseEnter}
                                onPanelMouseLeave={handleMenuMouseLeave}
                            />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
