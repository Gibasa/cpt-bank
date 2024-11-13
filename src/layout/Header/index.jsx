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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const pages = [
  { title: "Início", route: "" },
  { title: "Quem somos", route: "#QSQuemSomos" },
  { title: "Serviços", route: "#ServicosCaixas" },
  { title: "Contato e Carreiras", route: "contato-e-carreira" },
];

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.white : theme.colors.primary} !important;
  position: fixed !important;
  top: 0;
  z-index: 5 !important;
  padding: 0 5vw !important;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"} !important;
  transition: background-color 0.3s, box-shadow 0.3s !important;
  .css-hhdjsd-MuiContainer-root {
    padding: 0 !important;
  }
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
  gap: 2.3vw;
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.primary : theme.colors.white} !important;
`;

const StyledToolbar = styled(Toolbar)`
  height: 120px !important;
  @media (max-width: 600px) {
    height: 50px !important;
  }
`;

const LogoBox = styled(Box)``;

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId, delay = 100) => {
    return new Promise((resolve) => {
      if (location.pathname !== "/") {
        navigate("/");
      }
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetPosition = section.offsetTop - 80;
          window.scrollTo({
            top: offsetPosition >= 0 ? offsetPosition : 0,
            behavior: "smooth",
          });
        }
        resolve();
      }, delay);
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  const handleTopClick = async () => {
    navigate("/");
    scrollToTop();
  };

  return (
    <StyledAppBar position="static" isScrolled={isScrolled} >
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <LogoBox
            component="div"
            to="/"
            sx={{
              height: {
                xs: "7vw",
                sm: "5vw",
                md: "4vw",
                lg: "3.5vw",
              },
              display: { xs: "flex", lg: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
            onClick={handleTopClick}
          >
            <Box
              component="img"
              src={
                isScrolled ? "/images/logo-blue.png" : "/images/logo-white.png"
              }
              alt="Logo"
              sx={{
                height: "100%",
                width: "auto",
              }}
            />
          </LogoBox>

          <Box sx={{ flexGrow: 1 }} />

          <BoxStyled sx={{ display: { xs: "none", lg: "flex" } }}>
            {pages.map(({ title, route }) => (
              <StyledButton
                key={title}
                component={route.startsWith("#") ? "button" : Link}
                to={!route.startsWith("#") ? route : undefined}
                onClick={async () => {
                  handleCloseNavMenu();
                  if (route === "") {
                    await handleTopClick();
                  } else if (route.startsWith("#")) {
                    await scrollToSection(route.replace("#", ""));
                  } else {
                    navigate(route);
                  }
                }}
                isScrolled={isScrolled}
                isActive={
                  (location.pathname === "/" && route === "") ||
                  location.pathname === `/${route}` ||
                  (location.pathname === "/contato-e-carreira" &&
                    route === "contato-e-carreira")
                }
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {title}
              </StyledButton>
            ))}
          </BoxStyled>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", lg: "none" } }}>
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
                  onClick={async () => {
                    handleCloseNavMenu();
                    if (page.route === "") {
                      await handleTopClick();
                    } else if (page.route.startsWith("#")) {
                      await scrollToSection(page.route.replace("#", ""));
                    } else {
                      navigate(`/${page.route}`);
                    }
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
