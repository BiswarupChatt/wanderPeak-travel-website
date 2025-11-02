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
    Paper,
    Popper,
    Fade,
    ClickAwayListener,
    Chip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

/* -------------------------------------------------------
   THEME HINT (optional): set these in your theme override
   primary.main:   "#0E2231"  // top bar
   secondary.main: "#0F2A3A"  // secondary bar
--------------------------------------------------------*/

/* -------------------- NAV DATA -------------------- */
/**
 * layout:
 *  - "megaRegions"  -> India/World (top links + left rail + right columns)
 *  - "cards"        -> Speciality Tours (card grid + bands + footer links)
 *  - "icons"        -> Customized Holidays (left icons list + right image cards)
 *  - "inbound"      -> Inbound (banner + left cards + right list with divider)
 *  - "simple"       -> Plain link (Corporate, Forex, Gift Cards, Contact)
 *
 * NOTE: image boxes are grey placeholders; replace later.
 */
const navData = [
    {
        title: "India",
        layout: "megaRegions",
        topLinks: [
            "Top Recommended Destinations",
            "Rajasthan",
            "Kerala",
            "Andaman and Nicobar",
            "North East",
            "Gujarat",
        ],
        leftRail: [
            "North India",
            "South India",
            "East & North East India",
            "Rajasthan, West & Central India",
        ],
        columns: [
            { heading: "Delhi", items: ["Chandrataal", "Dalhousie", "Dharamshala", "Kaza", "Manali", "Shimla", "Spiti Valley"] },
            { heading: "Leh-Ladakh", items: ["Kargil", "Leh", "Nubra Valley", "Pangong Tso", "Turtuk"] },
            { heading: "Amritsar", items: [] },
            { heading: "Chandigarh", items: [] },
            { heading: "Punjab & Haryana", items: ["Kurukshetra", "Panipat"] },
            { heading: "Uttarakhand", items: ["Jim Corbett Park", "Haridwar", "Mussoorie", "Nainital", "Rishikesh", "Chardham Yatra"] },
            { heading: "Uttar Pradesh", items: ["Agra", "Ayodhya", "Fatehpur Sikri", "Jhansi", "Lucknow", "Mathura", "Prayagraj", "Sarnath", "Varanasi", "Vrindavan"] },
        ],
    },
    {
        title: "World",
        layout: "megaRegions",
        topLinks: [
            "Top Recommended Destinations",
            "America",
            "Europe",
            "South East Asia",
            "Australia New Zealand",
            "Africa",
            "Japan China Korea Taiwan",
        ],
        leftRail: ["Africa", "America", "Asia", "Australia & New Zealand", "Europe", "Middle East", "Antarctica"],
        columns: [
            { heading: "Egypt", items: ["Alexandria", "Aswan", "Cairo", "Hurghada", "Luxor", "Nile Cruise"] },
            { heading: "Kenya", items: ["Masai Mara"] },
            { heading: "Mauritius", items: ["Port Louis"] },
            { heading: "Seychelles", items: [] },
            { heading: "South Africa", items: ["Cape Town", "George", "Johannesburg", "Knysna", "Mossel Bay", "Outdshoorn", "Pilanesberg National Park", "Port Elizabeth (Gqeberha)", "Stellenbosch", "Sun City"] },
            { heading: "Tanzania", items: [] },
            { heading: "Zimbabwe", items: ["Victoria Falls"] },
        ],
    },
    {
        title: "Speciality Tours",
        layout: "cards",
        bestselling: [
            { title: "Women's Special", sub: "104 Departures", img: "" },
            { title: "Seniors' Special", sub: "74 Departures", img: "" },
            { title: "Family Tour Packages", sub: "1080 Departures", img: "" },
            { title: "Honeymoon Special", sub: "27 Departures", img: "" },
        ],
        somethingNew: [
            { title: "Couples Only", sub: "(2 Departures)" },
            { title: "Luxury Group Tours", sub: "(2 Departures)" },
            { title: "Post Tour Holidays", sub: "" },
            { title: "Road Trips", sub: "(3 Departures)" },
            { title: "Short Trips", sub: "(78 Departures)" },
            { title: "YOLO Outdoors", sub: "(6 Departures)" },
        ],
        newlyLaunched: [
            { title: "Women's Special with Kids", sub: "(4 Departures)" },
            { title: "Women's Special Shopping and Food Tours", sub: "" },
            { title: "Women's Special Spiritual Tours", sub: "(2 Departures)" },
            { title: "Grandparents and Grandchildren Special Tours", sub: "(4 Departures)" },
        ],
        footerLinks: [
            "One Week One Place",
            "Treks & Hikes",
            "City Walks & Day Trips",
            "Students' Special",
            "Women's Special YOLO Tours",
        ],
    },
    {
        title: "Customized Holidays",
        layout: "icons",
        leftList: [
            { title: "Family Fun" },
            { title: "Romantic Holidays" },
            { title: "Getaways" },
            { title: "Hidden Gems", badge: "Newly Launched" },
            { title: "Self Drive Holidays" },
            { title: "Air Inclusive Holidays" },
            { title: "Cruise Holidays" },
        ],
        rightCards: [
            { title: "Luxury Holidays", sub: "choose the right tailor-made luxury travel vacations", img: "" },
            { title: "Island Getaways", sub: "explore the tropical island getaways", img: "" },
        ],
    },
    {
        title: "Corporate Travel",
        layout: "simple",
    },
    {
        title: "Inbound",
        layout: "inbound",
        banner: "Tailor-made Indian journeys for NRIs and foreign guests seeking culture and spirituality. Explore Now",
        leftCards: [
            { title: "Rajasthan Royale", sub: "Beyond The Forts", img: "" },
            { title: "Rajasthan", sub: "Roars & Royals", img: "" },
            { title: "Golden Grandeur", sub: "The Triangle of Royalty", img: "" },
            { title: "Udaipur", sub: "The Triangle of Royalty", img: "" },
        ],
        rightListA: [
            { title: "India Royale", sub: "Roots & Routes", img: "" },
            { title: "Sacred Trails", sub: "Ayodhya Prayagraj Varanasi", img: "" },
            { title: "On Buddha’s Trail", sub: "A pilgrimage route", img: "" },
            { title: "The Himalayan Kingdom", sub: "Mountain Range of Asia", img: "" },
        ],
        rightListB: [
            { title: "Maharaja’s Express", sub: "The Indian Panorama", img: "" },
            { title: "Blissful Bhutan", sub: "Nature, Nirvana, Monks", img: "" },
            { title: "Nepal", sub: "Mountain Lakes & Wildlife", img: "" },
            { title: "Sri Lanka", sub: "Sacred Sites to Sandy Shores", img: "" },
        ],
    },
    { title: "Forex", layout: "simple" },
    { title: "Gift Cards", layout: "simple" },
    { title: "Contact Us", layout: "simple" },
];

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
const ImgPlaceholder = ({ ratio = "16/9" }) => (
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

/* -------------------- MEGA PANELS -------------------- */

// India/World
function PanelMegaRegions({ item }) {
    return (
        <Paper elevation={6} sx={{ width: 1120, borderRadius: 1, overflow: "hidden" }}>
            {/* Top links */}
            {!!item.topLinks?.length && (
                <Box
                    sx={{
                        px: 2,
                        py: 1.25,
                        borderBottom: "1px solid rgba(0,0,0,0.08)",
                        bgcolor: "#fff",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        fontSize: 14,
                    }}
                >
                    {item.topLinks.map((t) => (
                        <Typography key={t} sx={{ fontWeight: 700, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                            {t}
                        </Typography>
                    ))}
                </Box>
            )}

            {/* Body */}
            <Box sx={{ display: "grid", gridTemplateColumns: "300px 1fr", minHeight: 420, bgcolor: "#F6F9FF" }}>
                {/* Left rail */}
                <Box sx={{ bgcolor: "#fff", p: 2, borderRight: "1px solid rgba(0,0,0,0.08)" }}>
                    {item.leftRail?.map((cat, i) => (
                        <Box
                            key={cat}
                            sx={{
                                px: 1.25,
                                py: 1.25,
                                borderRadius: 1,
                                fontWeight: 700,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                                ...(i === 0 && { bgcolor: "#F6F9FF" }),
                                "&:hover": { bgcolor: "#F0F4FE" },
                            }}
                        >
                            <span>{cat}</span>
                            <ArrowForwardIosRoundedIcon sx={{ fontSize: 14, opacity: 0.6 }} />
                        </Box>
                    ))}
                </Box>

                {/* Right columns */}
                <Box sx={{ p: 2, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 2 }}>
                    {item.columns?.map((col, idx) => (
                        <Box key={idx}>
                            <Typography sx={{ fontWeight: 800, mb: 1, fontSize: 14, borderBottom: "1px solid rgba(0,0,0,0.12)", pb: 0.75 }}>
                                {col.heading}
                            </Typography>
                            {col.items?.map((it) => (
                                <Typography
                                    key={it}
                                    sx={{ fontSize: 14, py: 0.5, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
                                >
                                    {it}
                                </Typography>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
}

// Speciality Tours
function PanelCards({ item }) {
    return (
        <Paper elevation={6} sx={{ width: 1120, borderRadius: 1, overflow: "hidden" }}>
            {/* BESTSELLING */}
            <Box sx={{ px: 2, py: 2, bgcolor: "#F6F9FF" }}>
                <Typography sx={{ fontWeight: 800, mb: 1 }}>BESTSELLING TOURS</Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
                    {item.bestselling?.map((c) => (
                        <Box key={c.title}>
                            <ImgPlaceholder ratio="16/9" />
                            <Typography sx={{ mt: 1, fontWeight: 700 }}>{c.title}</Typography>
                            <Typography sx={{ fontSize: 13, textDecoration: "underline", cursor: "pointer" }}>
                                {c.sub} →
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* SOMETHING NEW */}
            <Box sx={{ px: 2, py: 2, bgcolor: "#fff", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                <Typography sx={{ fontWeight: 800, mb: 1 }}>SOMETHING NEW TO TRY</Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 2 }}>
                    {item.somethingNew?.map((n) => (
                        <Box key={n.title} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                            <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#E6E9F2" }} />
                            <Box>
                                <Typography sx={{ fontWeight: 700 }}>{n.title}</Typography>
                                <Typography sx={{ fontSize: 12, opacity: 0.7 }}>{n.sub}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* NEWLY LAUNCHED BAND */}
            <Box
                sx={{
                    px: 2,
                    py: 2,
                    bgcolor: "linear-gradient(#FFF,#FFF)",
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    background: "linear-gradient(90deg, rgba(255,153,0,0.06), rgba(255,153,0,0))",
                }}
            >
                <Chip label="Newly Launched" size="small" color="error" sx={{ mb: 1, color: "#fff" }} />
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
                    {item.newlyLaunched?.map((n) => (
                        <Box key={n.title}>
                            <Typography sx={{ fontWeight: 700 }}>{n.title}</Typography>
                            <Typography sx={{ fontSize: 12, opacity: 0.7 }}>{n.sub}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* FOOTER LINKS */}
            <Box sx={{ px: 2, py: 1.5, bgcolor: "#fff", borderTop: "1px solid rgba(0,0,0,0.08)", display: "flex", gap: 3 }}>
                {item.footerLinks?.map((l) => (
                    <Typography key={l} sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                        {l}
                    </Typography>
                ))}
            </Box>
        </Paper>
    );
}

// Customized Holidays
function PanelIcons({ item }) {
    return (
        <Paper elevation={6} sx={{ width: 1120, borderRadius: 1, overflow: "hidden", p: 3 }}>
            <Typography sx={{ fontWeight: 800, color: "#1A4BB8", mb: 2 }}>
                🎉 THEMED EXPERIENCES <span style={{ fontWeight: 400 }}>- Find your reason!</span>
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: "460px 1fr", gap: 3 }}>
                {/* Left icon list */}
                <Box>
                    {item.leftList?.map((row) => (
                        <Box key={row.title} sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 1.25 }}>
                            <Box sx={{ width: 36, height: 36, borderRadius: "10px", bgcolor: "#E6E9F2" }} />
                            <Typography sx={{ fontWeight: 700 }}>{row.title}</Typography>
                            {row.badge && (
                                <Chip label={row.badge} size="small" color="error" sx={{ ml: 1, color: "#fff" }} />
                            )}
                        </Box>
                    ))}
                </Box>

                {/* Right image cards */}
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 3 }}>
                    {item.rightCards?.map((c) => (
                        <Box key={c.title} sx={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 2, alignItems: "center" }}>
                            <ImgPlaceholder ratio="16/9" />
                            <Box>
                                <Typography sx={{ fontWeight: 800 }}>
                                    {c.title} <span style={{ textDecoration: "underline" }}>→</span>
                                </Typography>
                                <Typography sx={{ opacity: 0.8 }}>{c.sub}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
}

// Inbound
function PanelInbound({ item }) {
    return (
        <Paper elevation={6} sx={{ width: 1120, borderRadius: 1, overflow: "hidden" }}>
            {/* Banner */}
            <Box sx={{ px: 3, py: 2, bgcolor: "rgba(255,205,0,0.15)" }}>
                <Typography>
                    {item.banner.split(" Explore Now")[0]}{" "}
                    <span style={{ textDecoration: "underline", fontWeight: 700 }}>Explore Now</span>
                </Typography>
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, p: 3 }}>
                {/* Left cards 2x2 */}
                <Box sx={{ pr: 3 }}>
                    <Typography sx={{ fontWeight: 800, mb: 2 }}>India: A Timeless Experience</Typography>
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                        {item.leftCards?.map((c) => (
                            <Box key={c.title}>
                                <ImgPlaceholder ratio="16/10" />
                                <Typography sx={{ mt: 1, fontWeight: 800 }}>{c.title}</Typography>
                                <Typography sx={{ opacity: 0.7 }}>{c.sub}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right lists with divider */}
                <Box sx={{ pl: 3, display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative" }}>
                    <Box sx={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, bgcolor: "rgba(0,0,0,0.08)" }} />
                    <Box sx={{ pr: 3 }}>
                        <Typography sx={{ fontWeight: 800, mb: 2 }}>Explore Niche Experiences</Typography>
                        {item.rightListA?.map((r) => (
                            <Box key={r.title} sx={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: 1.5, alignItems: "center", py: 1 }}>
                                <Box sx={{ width: 52, height: 52, borderRadius: "50%", bgcolor: "#E6E9F2" }} />
                                <Box>
                                    <Typography sx={{ fontWeight: 800 }}>{r.title}</Typography>
                                    <Typography sx={{ opacity: 0.7 }}>{r.sub}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ pl: 3 }}>
                        {item.rightListB?.map((r) => (
                            <Box key={r.title} sx={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: 1.5, alignItems: "center", py: 1 }}>
                                <Box sx={{ width: 52, height: 52, borderRadius: "50%", bgcolor: "#E6E9F2" }} />
                                <Box>
                                    <Typography sx={{ fontWeight: 800 }}>{r.title}</Typography>
                                    <Typography sx={{ opacity: 0.7 }}>{r.sub}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}

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
        <Box onMouseEnter={handleEnter} onMouseLeave={handleLeave} sx={{ position: "relative" }}>
            {/* label */}
            <Box
                ref={labelRef}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1.25,
                    py: 1,
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
                backgroundColor: theme.palette.secondary.main,
                boxShadow: "none",
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            <Toolbar disableGutters sx={{ mx: { md: 4 }, minHeight: 48, gap: 1 }}>
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
            <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main, py: 1, boxShadow: "none" }}>
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
