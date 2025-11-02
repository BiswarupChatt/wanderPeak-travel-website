import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
    InputBase,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const secondaryNavData = [
    {
        title: "Destinations",
        children: [
            {
                title: "India",
                children: ["Kashmir", "Kerala", "Sikkim"],
            },
            {
                title: "International",
                children: ["Europe", "Bali", "Thailand"],
            },
        ],
    },
    {
        title: "Experiences",
        children: ["Adventure", "Luxury", "Beach", "Wildlife"],
    },
    { title: "About Us" },
    { title: "Contact" },
];

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    const handleDropdownToggle = (title) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <>
            {/* === Main Navbar === */}
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    py: 1,
                    boxShadow: "none",
                    zIndex: theme.zIndex.drawer + 2,
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Left: Logo */}
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        TravelNow
                    </Typography>

                    {/* Center: Search */}
                    {!isMobile && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "rgba(255,255,255,0.15)",
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                width: "40%",
                            }}
                        >
                            <SearchIcon sx={{ mr: 1 }} />
                            <InputBase placeholder="Search destinations..." fullWidth />
                        </Box>
                    )}

                    {/* Right: CTA + Sign In */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {!isMobile && (
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ borderRadius: "20px", textTransform: "none" }}
                            >
                                Travel Planner
                            </Button>
                        )}
                        {!isMobile && (
                            <Button color="inherit" sx={{ textTransform: "none" }}>
                                Sign In
                            </Button>
                        )}
                        {isMobile && (
                            <IconButton color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* === Secondary Navbar (Visible only on desktop) === */}
            {!isMobile && (
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        boxShadow: "none",
                        zIndex: theme.zIndex.drawer + 2,
                    }}
                >
                    <Toolbar sx={{ justifyContent: "center", gap: 3 }}>
                        {secondaryNavData.map((item) => (
                            <Box
                                key={item.title}
                                sx={{
                                    position: "relative",
                                    "&:hover .dropdown": {
                                        display: "block",
                                    },
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        cursor: "pointer",
                                        color: "white",
                                        fontWeight: 500,
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                {/* Dropdown */}
                                {item.children && (
                                    <Box
                                        className="dropdown"
                                        sx={{
                                            display: "none",
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            backgroundColor: "white",
                                            borderRadius: 1,
                                            boxShadow: 3,
                                            mt: 1,
                                            minWidth: 180,
                                            zIndex: 10,
                                            p: 1,
                                        }}
                                    >
                                        {item.children.map((subItem) =>
                                            typeof subItem === "string" ? (
                                                <Typography
                                                    key={subItem}
                                                    sx={{
                                                        px: 2,
                                                        py: 1,
                                                        borderRadius: 1,
                                                        "&:hover": {
                                                            backgroundColor: "rgba(0,0,0,0.05)",
                                                        },
                                                    }}
                                                >
                                                    {subItem}
                                                </Typography>
                                            ) : (
                                                <Box key={subItem.title} sx={{ mb: 1 }}>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: "bold",
                                                            px: 2,
                                                            py: 0.5,
                                                            color: theme.palette.primary.main,
                                                        }}
                                                    >
                                                        {subItem.title}
                                                    </Typography>
                                                    {subItem.children.map((child) => (
                                                        <Typography
                                                            key={child}
                                                            sx={{
                                                                px: 3,
                                                                py: 0.5,
                                                                borderRadius: 1,
                                                                "&:hover": {
                                                                    backgroundColor: "rgba(0,0,0,0.05)",
                                                                },
                                                            }}
                                                        >
                                                            {child}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            )
                                        )}
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Toolbar>
                </AppBar>
            )}

            {/* === Drawer for Mobile (contains Secondary Nav) === */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Menu
                    </Typography>
                    <List>
                        {secondaryNavData.map((item) => (
                            <React.Fragment key={item.title}>
                                <ListItem
                                    button
                                    onClick={() => handleDropdownToggle(item.title)}
                                >
                                    <ListItemText primary={item.title} />
                                    {item.children ? (
                                        openDropdowns[item.title] ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )
                                    ) : null}
                                </ListItem>
                                {item.children && (
                                    <Collapse
                                        in={openDropdowns[item.title]}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            {item.children.map((subItem) =>
                                                typeof subItem === "string" ? (
                                                    <ListItem key={subItem} sx={{ pl: 4 }}>
                                                        <ListItemText primary={subItem} />
                                                    </ListItem>
                                                ) : (
                                                    <React.Fragment key={subItem.title}>
                                                        <ListItem sx={{ pl: 4 }}>
                                                            <ListItemText
                                                                primary={subItem.title}
                                                                primaryTypographyProps={{
                                                                    fontWeight: "bold",
                                                                }}
                                                            />
                                                        </ListItem>
                                                        {subItem.children.map((child) => (
                                                            <ListItem key={child} sx={{ pl: 6 }}>
                                                                <ListItemText primary={child} />
                                                            </ListItem>
                                                        ))}
                                                    </React.Fragment>
                                                )
                                            )}
                                        </List>
                                    </Collapse>
                                )}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
