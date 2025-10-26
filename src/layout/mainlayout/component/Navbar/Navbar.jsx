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
import { useTheme } from "@mui/material/styles";

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
    <AppBar
      position="static"
      elevation={2}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: (t) => t.shadows[0],
        height: 64,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2.5,
          height: "100%",
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
              fontWeight: 600,
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
