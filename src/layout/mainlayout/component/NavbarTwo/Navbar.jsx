// Navbar.jsx
import React, { useState, useRef } from "react";
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
    Stack,
    Divider,
    Popper,
    Fade,
    ClickAwayListener,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { navData } from "./components/constants";
import PanelInbound from "./components/PanelInbound";
import PanelIcons from "./components/PanelIcons";
import PanelCards from "./components/PanelCards";
import PanelMegaRegions from "./components/PanelMegaRegions";

/* -------------------- SMALL PARTS -------------------- */
function PhonePill({ number = "1800 313 5555" }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 1.25,
                py: 0.6,
                borderRadius: 9999,
                color: "#fff",
                background: "linear-gradient(90deg, #0C63CE, #2D78D4)",
            }}
        >
            <Box
                sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "rgba(255,255,255,0.16)",
                    flexShrink: 0,
                }}
            >
                <PhoneInTalkOutlinedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {number}
            </Typography>
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18, opacity: 0.9 }} />
        </Box>
    );
}

function SignInIcon({ label = "Sign In" }) {
    return (
        <Stack alignItems="center" spacing={0.25} sx={{ color: "#fff", minWidth: 44 }}>
            <AccountCircleOutlinedIcon />
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
                {label}
            </Typography>
        </Stack>
    );
}

function SearchBar() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 1.25,
                py: 0.6,
                borderRadius: 9999,
                backgroundColor: "#fff",
            }}
        >
            <SearchIcon sx={{ color: "rgba(0,0,0,0.54)" }} />
            <InputBase
                placeholder='Search "Eiffel Tower"'
                fullWidth
                sx={{
                    fontSize: 14,
                    "&& input": { padding: 0 },
                }}
            />
            <IconButton
                size="small"
                sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "rgba(0,0,0,0.06)",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
                }}
            >
                <KeyboardVoiceOutlinedIcon sx={{ fontSize: 20 }} />
            </IconButton>
        </Box>
    );
}

/* -------------------- PLACEHOLDER IMAGE BLOCK -------------------- */
export const ImgPlaceholder = ({ ratio = "16/9" }) => (
    <Box
        sx={{
            width: "100%",
            aspectRatio: ratio,
            borderRadius: 1,
            bgcolor: "#E6E9F2",
            border: "1px solid rgba(0,0,0,0.06)",
        }}
    />
);

/* -------------------- SECONDARY NAV ITEM -------------------- */
function SecondaryNavItem({ item }) {
    const [open, setOpen] = useState(false);
    const labelRef = useRef(null);
    const enterTimer = useRef();
    const leaveTimer = useRef();

    const hasPanel = item.layout && item.layout !== "simple";

    const handleEnter = () => {
        clearTimeout(leaveTimer.current);
        enterTimer.current = setTimeout(() => {
            if (hasPanel && labelRef.current) setOpen(true);
        }, 60);
    };
    const handleLeave = () => {
        clearTimeout(enterTimer.current);
        leaveTimer.current = setTimeout(() => setOpen(false), 120);
    };
    const keepOpen = () => {
        clearTimeout(leaveTimer.current);
        setOpen(true);
    };
    const closeNow = () => setOpen(false);

    const renderPanel = () => {
        switch (item.layout) {
            case "megaRegions":
                return <PanelMegaRegions item={item} />;
            case "cards":
                return <PanelCards item={item} />;
            case "icons":
                return <PanelIcons item={item} />;
            case "inbound":
                return <PanelInbound item={item} />;
            default:
                return null;
        }
    };

    return (
        <Box onMouseEnter={handleEnter} onMouseLeave={handleLeave} sx={{ position: "relative", }}>
            {/* label */}
            <Box
                ref={labelRef}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1.25,
                    // py: 1,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    "& svg": { transition: "transform .15s ease" },
                    ...(open && { "& svg": { transform: "rotate(180deg)" } }),
                }}
            >
                {item.title}
                {hasPanel && <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18, opacity: 0.9 }} />}
            </Box>

            {hasPanel && (
                <Popper
                    open={open}
                    anchorEl={labelRef.current}
                    placement="bottom-start"
                    transition
                    modifiers={[
                        { name: "offset", options: { offset: [0, 10] } },
                        { name: "preventOverflow", options: { padding: 8 } },
                        { name: "flip", enabled: false }, // never flip above
                    ]}
                    sx={{ zIndex: (t) => t.zIndex.modal + 1 }}
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={160}>
                            {/* child of Fade must forward a DOM node */}
                            <Box onMouseEnter={keepOpen} onMouseLeave={handleLeave}>
                                <ClickAwayListener onClickAway={closeNow}>
                                    <Box>{renderPanel()}</Box>
                                </ClickAwayListener>
                            </Box>
                        </Fade>
                    )}
                </Popper>
            )}
        </Box>
    );
}

function SecondaryNav() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    if (isMobile) return null;

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#132738",
                boxShadow: "none",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                minHeight: 44
            }}
        >
            <Toolbar disableGutters sx={{ mx: { md: 4 }, gap: 1, display: "flex", justifyContent: "center", minHeight: 30 }}>
                {navData.map((item) => (
                    <SecondaryNavItem key={item.title} item={item} />
                ))}
            </Toolbar>
        </AppBar>
    );
}

/* -------------------- MAIN NAV + DRAWER -------------------- */
export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleDrawer = (open) => () => setDrawerOpen(open);
    const handleDropdownToggle = (title) =>
        setOpenDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));

    return (
        <>
            {/* === Main Navbar === */}
            <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main, boxShadow: "none" }}>
                {!isMobile ? (
                    <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", gap: 2, px: { md: 4 } }}>
                        {/* Logo */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, flexShrink: 0 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", whiteSpace: "nowrap" }}>
                                VEENA WORLD
                            </Typography>
                        </Box>

                        {/* Search */}
                        <Box sx={{ flexGrow: 1, maxWidth: "52%" }}>
                            <SearchBar />
                        </Box>

                        {/* CTA */}
                        <Button
                            color="inherit"
                            sx={{
                                textTransform: "none",
                                fontWeight: 700,
                                textDecoration: "underline",
                                ml: 1,
                                px: 0,
                                minWidth: "unset",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Travel Planner 2025
                        </Button>

                        <Divider orientation="vertical" flexItem sx={{ mx: 1.5, opacity: 0.25, borderColor: "currentColor" }} />

                        {/* Phone pill */}
                        <Box sx={{ ml: 0.5 }}>
                            <PhonePill number="1800 313 5555" />
                        </Box>

                        {/* Sign-in */}
                        <Box sx={{ ml: 1 }}>
                            <SignInIcon />
                        </Box>
                    </Toolbar>
                ) : (
                    <>
                        <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, px: 2 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                                <IconButton color="inherit" onClick={toggleDrawer(true)} aria-label="open menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", whiteSpace: "nowrap" }}>
                                    V
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                <PhonePill number="1800 313 5555" />
                                <SignInIcon />
                            </Box>
                        </Toolbar>

                        <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", gap: 2, px: 2, pt: 0.75 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <SearchBar />
                            </Box>

                            <Button
                                color="inherit"
                                sx={{ textTransform: "none", fontWeight: 700, textDecoration: "underline", whiteSpace: "nowrap", minWidth: "unset", px: 0.25 }}
                            >
                                Travel Planner 2025
                            </Button>
                        </Toolbar>
                    </>
                )}
            </AppBar>

            {/* === Secondary Navbar (desktop only) === */}
            <SecondaryNav />

            {/* === Drawer (mobile) — simple list === */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 280, p: 2 }} role="presentation">
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Menu
                    </Typography>
                    <List>
                        {navData.map((item) => (
                            <React.Fragment key={item.title}>
                                <ListItem button onClick={() => handleDropdownToggle(item.title)}>
                                    <ListItemText primary={item.title} />
                                    {item.layout !== "simple"
                                        ? openDropdowns[item.title]
                                            ? <ExpandLess />
                                            : <ExpandMore />
                                        : null}
                                </ListItem>

                                {item.layout !== "simple" && (
                                    <Collapse in={openDropdowns[item.title]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {/* mobile fallback: just show some children */}
                                            {item.topLinks?.slice(0, 5).map((l) => (
                                                <ListItem key={l} sx={{ pl: 4 }}>
                                                    <ListItemText primary={l} />
                                                </ListItem>
                                            ))}
                                            {item.leftRail?.slice(0, 5).map((l) => (
                                                <ListItem key={l} sx={{ pl: 4 }}>
                                                    <ListItemText primary={l} />
                                                </ListItem>
                                            ))}
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
