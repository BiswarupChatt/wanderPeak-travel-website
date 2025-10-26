import React from "react";
import { Link } from "react-router-dom";
import { useTheme, alpha } from "@mui/material/styles";
import logo from "../../../../assets/logo.png";
import Typography from "@mui/material/Typography";
import { IconButton, ListItem, List, Divider, Grid, Container, Box } from "@mui/material";


import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const QUICK_LINKS = [
    { label: "Home", to: "/" },
    { label: "Destinations", to: "/destinations" },
    { label: "Services", to: "/services" },
    { label: "About Us", to: "/about" },
];

const TRAVEL = [
    { label: "Popular Places", to: "/popular-places" },
    { label: "Featured Tours", to: "/featured-tours" },
    { label: "Custom Tours", to: "/custom-tours" },
];

const POLICIES = [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Refund Policy", to: "/refund" },
];

const FooterLink = ({ to, children }) => (
    <ListItem
        component={Link}
        to={to}
        sx={{
            p: 0,
            mb: 0.5,
            color: "text.secondary",
            "&:hover": { color: "text.primary" },
            textDecoration: "none",
            fontSize: 14,
        }}
    >
        {children}
    </ListItem>
);

const Footer = () => {
    const theme = useTheme();
    const bg = alpha(theme.palette.secondary.main, 0.06);

    return (
        <Box
            component="footer"
            sx={{
                mt: 6,
                py: { xs: 4, md: 6 },
                bgcolor: bg,
                borderTop: `1px solid ${alpha(theme.palette.divider, 0.06)}`,
                backdropFilter: "blur(2px)",
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="flex-start"
                    justifyContent="space-between"
                >
                    {/* Left: Logo + short text */}
                    <Grid size={{
                        md: 4, xs: 12
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box>
                                <img
                                    src={logo}
                                    alt="WanderPeak Logo"
                                    style={{ height: 40, width: "auto", display: "block" }}
                                />
                            </Box>

                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary", maxWidth: 360 }}
                            >
                                WanderPeak — curated travel experiences around the world.
                                Handpicked tours, local guides and flexible itineraries for
                                every traveler.
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{ color: "text.secondary", mt: 1 }}
                            >
                                Contact: <Box component="span" sx={{ fontWeight: 600 }}>hello@wanderpeak.com</Box>
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right: 3 columns of links */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
                                    Quick Links
                                </Typography>
                                <List disablePadding>
                                    {QUICK_LINKS.map((l) => (
                                        <FooterLink key={l.label} to={l.to}>
                                            {l.label}
                                        </FooterLink>
                                    ))}
                                </List>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
                                    Travel
                                </Typography>
                                <List disablePadding>
                                    {TRAVEL.map((l) => (
                                        <FooterLink key={l.label} to={l.to}>
                                            {l.label}
                                        </FooterLink>
                                    ))}
                                </List>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
                                    Policies
                                </Typography>
                                <List disablePadding>
                                    {POLICIES.map((l) => (
                                        <FooterLink key={l.label} to={l.to}>
                                            {l.label}
                                        </FooterLink>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: alpha(theme.palette.divider, 0.12) }} />

                {/* Copyright / bottom row */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                >
                    <Grid size={{ size: 12, md: "auto" }}>
                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                            © {new Date().getFullYear()} WanderPeak. All rights reserved.
                        </Typography>
                    </Grid>

                    <Grid size={{ size: 12, md: "auto" }} sx={{ display: "flex", justifyContent: "center", mb: { xs: 1, md: 0 } }}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                component="a"
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: "text.secondary", bgcolor: "transparent" }}
                                aria-label="facebook"
                            >
                                <FacebookIcon fontSize="small" />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: "text.secondary" }}
                                aria-label="twitter"
                            >
                                <TwitterIcon fontSize="small" />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: "text.secondary" }}
                                aria-label="instagram"
                            >
                                <InstagramIcon fontSize="small" />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: "text.secondary" }}
                                aria-label="linkedin"
                            >
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid size={{ size: 12, md: "auto" }}>
                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                            Built with care • Privacy-first • Accessible
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;