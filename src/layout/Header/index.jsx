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
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const pages = [
  { title: "Início", route: "" },
  { title: "Quem somos", route: "quem-somos" },
  { title: "Serviços", route: "servicos" },
  { title: "Contato e Carreiras", route: "contato-e-carreira" },
];

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.white : theme.colors.primary} !important;
  position: fixed !important;
  top: 0;
  z-index: 5 !important;
  padding: 0 50px !important;
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
  cursor: pointer !important;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: ${({ isActive }) => (isActive ? "90%" : "0%")};
    height: 3px;
    background-color: ${({ theme, isScrolled }) =>
      isScrolled ? theme.colors.primary : theme.colors.white};
    transition: width 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 90%;
  }
`;

const BoxStyled = styled(Box)`
  display: flex;
  gap: 30px;
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
  const location = useLocation();

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
            component={Link}
            to="/"
            sx={{
              height: 50,
              display: { xs: "flex", md: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={
                isScrolled ? "/images/logo-blue.png" : "/images/logo-white.png"
              }
              alt="Logo"
              sx={{
                height: "100%",
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <BoxStyled sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map(({ title, route }) => (
              <StyledButton
                key={title}
                component={Link}
                to={`/${route}`} //
                onClick={handleCloseNavMenu}
                isScrolled={isScrolled}
                isActive={location.pathname === "/" && route === "" || location.pathname === `/${route}`}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {title}
              </StyledButton>
            ))}
          </BoxStyled>

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
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    handleCloseNavMenu();
                    window.location.href = `/${page.route}`;
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.title}
                  </Typography>
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
