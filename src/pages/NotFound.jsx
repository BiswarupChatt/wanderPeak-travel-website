import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                bgcolor: "#f9fafb",
                color: "#333",
                p: 3,
            }}
        >
            <Typography
                variant="h2"
                sx={{ fontWeight: "bold", color: "primary.main", mb: 1 }}
            >
                404
            </Typography>

            <Typography variant="h5" sx={{ mb: 2 }}>
                Oops! Page Not Found
            </Typography>

            <Typography
                variant="body1"
                sx={{ maxWidth: 480, mb: 4, color: "text.secondary" }}
            >
                The page you’re looking for doesn’t exist or may have been moved.
                Try returning to the homepage or contact support.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                    component={RouterLink}
                    to="/"
                    variant="contained"
                    size="large"
                >
                    Go Home
                </Button>
                <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    size="large"
                >
                    Contact Support
                </Button>
            </Stack>
        </Box>
    );
};

export default NotFound;
