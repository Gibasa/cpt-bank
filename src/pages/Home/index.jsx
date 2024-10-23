import styled from "styled-components";
import Video from "@/components/Video";
import HomeBanner from "@/components/HomeBanner";
import HomeSolucoes from "@/components/HomeSolucoes";

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
        route="/quem-somos"
        section="QSQuemSomos"
        offsetTopNum="50"
      />
      <HomeBanner />
      <HomeSolucoes />
    </HomeStyled>
  );
}

export default Home;
