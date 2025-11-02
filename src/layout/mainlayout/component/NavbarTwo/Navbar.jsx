// Navbar.jsx
import React, { useState, useRef } from "react";
import {
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

/* ==================== THEME TOKENS ==================== */
const NAV = {
    bg: "#0E1F2B", // deep navy like screenshot
    divider: "rgba(255,255,255,0.16)",
    linkYellow: "#FFD400",
    searchBg: "#FFFFFF",
    searchBorder: "rgba(19,39,56,0.10)",
    searchShadow: "0 1px 0 rgba(19,39,56,0.05)",
    micBg: "rgba(0,0,0,0.06)",
    pillGrad: "linear-gradient(90deg, #225EAD 0%, #3B6EAF 100%)", // deep blue tone
    pillCircle: "#1A4C90", // slightly darker inner circle
};

/* ==================== SMALL PARTS ==================== */
function PhonePill({ number = "1800 313 5555" }) {
    return (
        <Box
            component="button"
            type="button"
            aria-label={`Call ${number}`}
            sx={{
                // reset button
                all: "unset",
                cursor: "pointer",

                // layout
                display: "inline-flex",
                alignItems: "center",
                gap: 1,                      
                height: 30,                  
                // px: 1.25,                   
                borderRadius: 9999,

                // color & bg
                color: "rgba(255,255,255,0.96)",
                background:
                    // subtle top gloss + main l-r gradient (very close to your shot)
                    "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 35%), " +
                    "linear-gradient(90deg, #2C5691 0%, #3D6EA8 100%)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",

                // crisp alignment
                lineHeight: 1,
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            }}
        >
            {/* phone circle (slightly clipped look by hugging the left edge) */}
            <Box
                sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    background:
                        "#0A66C2",
                    border: "1px solid rgba(255,255,255,0.12)",
                }}
            >
                <PhoneInTalkOutlinedIcon
                    sx={{ fontSize: 16, display: "block", opacity: 0.95 }}
                />
            </Box>

            <Typography
                sx={{
                    fontSize: 15,              // slightly larger than 14 for the dense feel
                    fontWeight: 800,
                    letterSpacing: 0.3,        // tight kerning like the screenshot
                    lineHeight: 1,
                    userSelect: "none",
                    color: "#fff",
                    // monospaced numerals for even rhythm
                    fontFeatureSettings: '"tnum","lnum"',
                }}
            >
                {number}
            </Typography>

            <KeyboardArrowDownRoundedIcon
                sx={{ fontSize: 16, opacity: 0.9, display: "block", ml: 0.25 }}
            />
        </Box>
    );
}

function SignInIcon({ label = "Sign In" }) {
    return (
        <Stack alignItems="center" spacing={0.25} sx={{ color: "#fff", minWidth: 44 }}>
            <AccountCircleOutlinedIcon />
            <Typography variant="caption" sx={{ opacity: 0.9, fontWeight: 500 }}>
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
                px: 1.5,
                py: 0.75,
                maxWidth: "400px",
                borderRadius: 9999,
                bgcolor: NAV.searchBg,
                border: `1px solid ${NAV.searchBorder}`,
                boxShadow: NAV.searchShadow,
            }}
        >
            <SearchIcon sx={{
                color: "rgba(0,0,0,0.54)", width: 20,
                height: 20,
                borderRadius: "50%",
            }} />
            <InputBase
                placeholder='Search "Europe"'
                fullWidth
                sx={{
                    fontSize: 14,
                    "&& input": { padding: 0 },
                    "&::placeholder": { color: "rgba(0,0,0,0.54)" },
                }}
            />
            <IconButton
                size="small"
                sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: NAV.micBg,
                    "&:hover": { bgcolor: "rgba(0,0,0,0.10)" },
                }}
            >
                <KeyboardVoiceOutlinedIcon sx={{ fontSize: 20 }} />
            </IconButton>
        </Box>
    );
}

/* Placeholder image utility (if you need it anywhere) */
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

/* ==================== SECONDARY NAV ITEM ==================== */
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
        <Box onMouseEnter={handleEnter} onMouseLeave={handleLeave} sx={{ position: "relative" }}>
            {/* label */}
            <Box
                ref={labelRef}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1.25,
                    py: 0.5,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "& svg": { transition: "transform .15s ease" },
                    ...(open && {
                        "& svg": { transform: "rotate(180deg)" },
                        backgroundColor: "#fff",
                        color: "#132738",
                    }),
                    "&:hover": { backgroundColor: "#fff", color: "#132738" },
                    // borderRadius: 1, 
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
                        { name: "offset", options: { offset: [0, 8] } },
                        { name: "preventOverflow", options: { padding: 8 } },
                        { name: "flip", enabled: false },
                    ]}
                    sx={{ zIndex: (t) => t.zIndex.modal + 1 }}
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={160}>
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
        <Box
            sx={{
                backgroundColor: NAV.bg,
                borderTop: `1px solid ${NAV.divider}`,
                minHeight: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mx: { md: 4 },
                    minHeight: 36,
                }}
            >
                {navData.map((item) => (
                    <SecondaryNavItem key={item.title} item={item} />
                ))}
            </Box>
        </Box>
    );
}

/* ==================== MAIN NAV + DRAWER ==================== */
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
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: (t) => t.zIndex.appBar,
                    backgroundColor: NAV.bg,
                    boxShadow: "none",
                    borderBottom: `1px solid ${NAV.divider}`,
                }}
            >
                {!isMobile ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            px: { md: 3.5 },
                            py: 1.25,
                            minHeight: 64,
                        }}
                    >
                        {/* Logo */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, flexShrink: 0 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    letterSpacing: 0.4,
                                    lineHeight: 1,
                                    whiteSpace: "nowrap",
                                }}
                            >
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
                                fontWeight: 800,
                                textDecoration: "underline",
                                textUnderlineOffset: 2,
                                color: NAV.linkYellow,
                                ml: 1,
                                px: 0,
                                minWidth: "unset",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Travel Planner 2025
                        </Button>

                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ mx: 1.5, borderColor: NAV.divider, opacity: 1 }}
                        />

                        {/* Phone pill */}
                        <Box sx={{ ml: 0.5 }}>
                            <PhonePill number="1800 313 5555" />
                        </Box>

                        {/* Sign-in */}
                        <Box sx={{ ml: 1 }}>
                            <SignInIcon />
                        </Box>
                    </Box>
                ) : (
                    <>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 2,
                                px: 2,
                                py: 1.5,
                                minHeight: 64,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                                <IconButton color="inherit" onClick={toggleDrawer(true)} aria-label="open menu">
                                    <MenuIcon sx={{ color: "#fff" }} />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 800, color: "#fff", letterSpacing: 0.4, lineHeight: 1 }}
                                >
                                    V
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                <PhonePill number="1800 313 5555" />
                                <SignInIcon />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                pb: 1.5,
                            }}
                        >
                            <Box sx={{ flexGrow: 1 }}>
                                <SearchBar />
                            </Box>

                            <Button
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontWeight: 800,
                                    textDecoration: "underline",
                                    textUnderlineOffset: 2,
                                    color: NAV.linkYellow,
                                    whiteSpace: "nowrap",
                                    minWidth: "unset",
                                    px: 0.25,
                                }}
                            >
                                Travel Planner 2025
                            </Button>
                        </Box>
                    </>
                )}
            </Box>

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
                                    {item.layout !== "simple" ? (
                                        openDropdowns[item.title] ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )
                                    ) : null}
                                </ListItem>

                                {item.layout !== "simple" && (
                                    <Collapse in={openDropdowns[item.title]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {/* mobile fallback: show a few children */}
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
