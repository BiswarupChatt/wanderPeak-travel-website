import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function MegaMenu({ menu }) {
    return (
        <Box
            sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                bgcolor: "white",
                boxShadow: 3,
                p: 2,
                zIndex: 10,
            }}
        >
            <Grid container spacing={2}>
                {menu.subcategories.map((sub, i) => (
                    <Grid item xs={6} md={3} key={i}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {sub.title}
                        </Typography>
                        {sub.items.map((item, j) => (
                            <Typography
                                key={j}
                                sx={{ fontSize: 14, color: "text.secondary", mt: 0.5 }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
