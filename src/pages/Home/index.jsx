import styled from "styled-components";
import Video from "@/components/Video";
import HomeBanner from "@/components/HomeBanner";
import ServicosCaixas from "@/components/ServicosCaixas";
import ServicosBanner from "@/components/ServicosBanner";
import QSQuemSomos from "@/components/QSQuemSomos";
import QSEconomize from "@/components/QSEconomize";
// import HomeSolucoes from "@/components/HomeSolucoes";

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
        section="QSQuemSomos"
        offsetTopNum="50"
      />
      <HomeBanner />
      {/* <HomeSolucoes /> */}
      <ServicosCaixas />
      <ServicosBanner />
      <QSQuemSomos />
      <QSEconomize />
    </HomeStyled>
  );
}

export default Home;
