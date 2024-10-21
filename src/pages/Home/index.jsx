import styled from "styled-components";
import Video from "@/components/Video";
import HomeBanner from "@/components/HomeBanner";
import HomeParceiros from "@/components/HomeParceiros";
import HomeSolucoes from "@/components/HomeSolucoes";

const HomeStyled = styled.section`
  margin-top: 120px;
  width: 100%;
`;

function Home() {
  return (
    <HomeStyled>
      <Video video="video-intro.mp4"/>
      <HomeBanner/>
      <HomeParceiros/>
      <HomeSolucoes/>
    </HomeStyled>
  );
}

export default Home;
