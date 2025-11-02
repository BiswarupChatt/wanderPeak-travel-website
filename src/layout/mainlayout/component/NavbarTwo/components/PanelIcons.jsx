import { Box, Chip, Paper, Typography } from "@mui/material";
import { ImgPlaceholder } from "../Navbar";

export default function PanelIcons({ item }) {
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