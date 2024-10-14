import styled from "styled-components";
import HomeVideo from "@/components/HomeVideo";
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
      <HomeVideo />
      <HomeBanner/>
      <HomeParceiros/>
      <HomeSolucoes/>
    </HomeStyled>
  );
}

export default Home;
