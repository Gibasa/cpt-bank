import styled from "styled-components";
import Video from "@/components/Video";
import Banner from "@/components/Banner";

const HomeStyled = styled.section`
  margin-top: 120px;
  width: 100%;
`;

function Home() {
  return (
    <HomeStyled>
      <Video />
      <Banner/>
    </HomeStyled>
  );
}

export default Home;
