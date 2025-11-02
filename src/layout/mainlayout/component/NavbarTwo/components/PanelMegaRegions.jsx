import { Box, Paper, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";


export default function PanelMegaRegions({ item }) {
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