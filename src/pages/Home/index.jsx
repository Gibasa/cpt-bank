import styled from "styled-components";
import Video from "@/components/Video";
import HomeBanner from "@/components/HomeBanner";
import ServicosCaixas from "@/components/ServicosCaixas";
import ServicosBanner from "@/components/ServicosBanner";
import QSQuemsomos from "@/components/QSQuemsomos";
import QSEconomize from "@/components/QSEconomize";
import Valores from "@/components/Valores";

const HomeStyled = styled.section`
  margin-top: 120px;
  width: 100%;
`;

function Home() {
  return (
    <HomeStyled>
      <Video
        video="video-intro.mp4"
        buttonText="Conheça nossa fintech"
        route="/"
        section="QSQuemsomos"
        offsetTopNum="50"
      />
      <HomeBanner />
      <ServicosCaixas />
      <ServicosBanner />
      <QSQuemsomos />
      <Valores/>
      <QSEconomize />
    </HomeStyled>
  );
}

export default Home;
