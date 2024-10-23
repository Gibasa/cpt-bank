import styled from "styled-components";
import Video from "@/components/Video";
// import Carousel from "@/components/Carousel";
import ServicosBanner from "@/components/ServicosBanner";
import ServicosCaixas from "../../components/ServicosCaixas";

const ServicosStyled = styled.div`
  margin-top: 80px;
`;

function Servicos() {
  return (
    <ServicosStyled>
      <Video video="pagina-serviços.mp4" />
      <ServicosCaixas/>
      {/* <Carousel /> */}
      <ServicosBanner />
    </ServicosStyled>
  );
}

export default Servicos;
