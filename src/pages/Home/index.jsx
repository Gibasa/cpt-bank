import styled from "styled-components";
import Video from "@/components/Video";
import Banner from "@/components/Banner";
import Parceiros from "@/components/Parceiros";

const HomeStyled = styled.section`
  margin-top: 120px;
  width: 100%;
`;

function Home() {
  return (
    <HomeStyled>
      <Video />
      <Banner/>
      <Parceiros/>
    </HomeStyled>
  );
}

export default Home;
