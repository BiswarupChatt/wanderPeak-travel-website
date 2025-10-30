import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "./components/menu_item";

export default function MainNavbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openIndexes, setOpenIndexes] = useState({});

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    const toggleIndex = (path) => {
        setOpenIndexes((prev) => ({ ...prev, [path]: !prev[path] }));
    };

    // Recursive Drawer Menu Renderer
    const renderDrawerItems = (items, level = 0) => (
        <List disablePadding>
            {items.map((menu, idx) => {
                const key = `${menu.title}-${level}-${idx}`;
                const hasSub =
                    menu.subcategories || menu.items ? true : false;

                return (
                    <Box key={key}>
                        <ListItemButton
                            onClick={() => {
                                if (hasSub) {
                                    toggleIndex(key);
                                } else {
                                    setDrawerOpen(false);
                                }
                            }}
                            component={!hasSub ? Link : "div"}
                            to={!hasSub ? menu.path || "#" : undefined}
                            sx={{ pl: 2 + level * 2 }}
                        >
                            <ListItemText primary={menu.title} />
                            {hasSub &&
                                (openIndexes[key] ? <ExpandLess /> : <ExpandMore />)}
                        </ListItemButton>

                        {/* Submenu Collapse */}
                        {hasSub && (
                            <Collapse in={!!openIndexes[key]} timeout="auto" unmountOnExit>
                                {menu.subcategories
                                    ? renderDrawerItems(menu.subcategories, level + 1)
                                    : renderDrawerItems(menu.items, level + 1)}
                            </Collapse>
                        )}
                    </Box>
                );
            })}
        </List>
    );

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
                {/* Left: Hamburger + Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: "flex", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        component={Link}
                        to="/"
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Logo
                    </Typography>
                </Box>

                {/* Search Box */}
                <Box
                    sx={{
                        display: { xs: "none", sm: "flex" },
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
                            display: { xs: "none", sm: "block" },
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
                            display: { xs: "none", sm: "flex" },
                        }}
                    >
                        1800 313 5555
                    </Button>

                    <Typography
                        sx={{ cursor: "pointer", display: { xs: "none", sm: "block" } }}
                    >
                        Sign In
                    </Typography>
                </Box>
            </Toolbar>

            {/* Drawer for small screens */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 280, p: 2 }}>
                    {renderDrawerItems(MENU_ITEMS)}
                </Box>
            </Drawer>
        </AppBar>
    );
}
