import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Home from "@/pages/Home";
import Servicos from "@/pages/Servicos";
import QuemSomos from "@/pages/QuemSomos";
import Contato from "@/pages/Contato";
import GlobalStyle from "@/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/servicos" element={<Servicos />}></Route>
          <Route path="/quem-somos" element={<QuemSomos />}></Route>
          <Route path="/contato-e-carreira" element={<Contato />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
