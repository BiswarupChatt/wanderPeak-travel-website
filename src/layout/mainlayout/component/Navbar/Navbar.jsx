import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_ITEMS } from "./components/navConfig";
import NavItem from "./components/NavItem";

// MUI
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, alpha } from "@mui/material/styles";

const MobileNavItem = ({ item, depth = 0, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setOpen((v) => !v);
      return;
    }
    if (onNavigate) onNavigate();
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        component={hasChildren ? "div" : item.path ? Link : "button"}
        to={hasChildren ? undefined : item.path}
        sx={{
          pl: 2 + depth * 2,
          py: 1,
        }}
      >
        <ListItemText
          primary={
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              {item.name}
            </Typography>
          }
        />
        {hasChildren && (
          <Typography variant="caption" sx={{ ml: 1, opacity: 0.85 }}>
            {open ? "▲" : "▼"}
          </Typography>
        )}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children.map((child) => (
              <MobileNavItem
                key={child.name}
                item={child}
                depth={depth + 1}
                onNavigate={onNavigate}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          // centered floating bar
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1100px, calc(100% - 48px))",
          borderRadius: 2,
          bgcolor: (t) => alpha(t.palette.background.paper, 0.72),
          backdropFilter: "blur(8px)",
        //   boxShadow: (t) => t.shadows[8],
          zIndex: (t) => t.zIndex.appBar + 10,
          // responsive: full width / flush at very small screens
          [theme.breakpoints.down("sm")]: {
            left: 0,
            transform: "none",
            width: "100%",
            top: 0,
            borderRadius: 0,
            bgcolor: (t) => alpha(t.palette.background.paper, 0.92),
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            px: { xs: 1.5, sm: 2.5 },
            height: 64,
            gap: 2,
          }}
        >
          {/* Logo / Left */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 700,
                "&:hover": { textDecoration: "none" },
              }}
            >
              WanderPeak
            </Typography>
          </Box>

          {/* Spacer */}
          <Box sx={{ flex: 1 }} />

          {/* Desktop items (right) */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              {NAVBAR_ITEMS.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open menu"
              onClick={() => setDrawerOpen(true)}
              size="large"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer to avoid content being hidden under fixed navbar */}
      <Box sx={{ height: { xs: 56, sm: 72 } }} />

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 320, maxWidth: "100vw" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.25,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton onClick={closeDrawer} size="large" aria-label="close menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          <List>
            {NAVBAR_ITEMS.map((item) => (
              <MobileNavItem
                key={item.name}
                item={item}
                onNavigate={closeDrawer}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
