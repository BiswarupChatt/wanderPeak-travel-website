import * as React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./component/NavbarTwo/Navbar";

export default function MainLayout() {
    return (
        <>
            {/* Navbar always above all sections */}
            <NavBar />

            {/* Main content area */}
            <Box
                component="main"
                sx={{
                    position: "relative",
                    zIndex: 0,
                    minHeight: "60vh",
                }}
            >
                <Outlet />
            </Box>
        </>
    );
}
