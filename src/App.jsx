import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import GlobalStyle from "@/GlobalStyles";
import ScrollToTop from "@/ScrollToTop";
const Home = React.lazy(() => import("@/pages/Home"));
const Servicos = React.lazy(() => import("@/pages/Servicos"));
const QuemSomos = React.lazy(() => import("@/pages/QuemSomos"));
const Contato = React.lazy(() => import("@/pages/Contato"));
const Formulario = React.lazy(() => import("@/pages/Formulario"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/contato-e-carreira" element={<Contato />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
