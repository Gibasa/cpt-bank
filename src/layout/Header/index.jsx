import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";

const pages = ["Quem somos", "Serviços", "Contato e Carreiras"];

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.white : theme.colors.primary} !important;
  position: fixed !important;
  top: 0;
  z-index: 5 !important;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"} !important;
  transition: background-color 0.3s, box-shadow 0.3s !important;
`;

const StyledButton = styled(Button)`
  color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.primary : theme.colors.white} !important;
  font-family: ${({ theme }) => theme.fonts.primary} !important;
  font-weight: 600 !important;
  text-transform: none !important;
  font-size: 20px !important;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 0%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: width 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 90%;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.primary : theme.colors.white} !important;
`;

const StyledToolbar = styled(Toolbar)`
  height: 120px !important;
`;

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static" isScrolled={isScrolled}>
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Box
            component="img"
            src={
              isScrolled ? "/images/logo-dark.png" : "/images/logo-light.png"
            }
            alt="Logo"
            href="/#"
            sx={{
              height: 70,
              display: { xs: "flex", md: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <StyledButton
                key={page}
                href={`#${page}`}
                onClick={handleCloseNavMenu}
                isScrolled={isScrolled}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </StyledButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: "auto" }}
            >
              <StyledMenuIcon isScrolled={isScrolled} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header;
