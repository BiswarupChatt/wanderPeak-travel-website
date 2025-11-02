import { Box, Paper, Typography } from "@mui/material";
import { ImgPlaceholder } from "../Navbar";

export default function PanelInbound({ item }) {
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