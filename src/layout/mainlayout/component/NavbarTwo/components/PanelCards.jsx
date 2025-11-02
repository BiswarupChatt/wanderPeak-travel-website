import { Box, Chip, Paper, Typography } from "@mui/material";
import { ImgPlaceholder } from "../Navbar";

export default function PanelCards({ item }) {
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