import styled from "styled-components";

const HomeVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 0px 0;
`;

const HomeVideoStyled = styled.video`
  width: 100%;
`;

const HomeButtonVideoStyled = styled.button`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 40px;
  font-size: 1.8vw;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function HomeVideo() {
  return (
    <HomeVideoContainer>
      <HomeVideoStyled
        muted
        autoPlay
        loop
        poster="./images/3P.2023.12 - FOTO HOME.png"
      >
        <source src="./images/video-intro.mp4" type="video/mp4" />
      </HomeVideoStyled>
      <HomeButtonVideoStyled>Conheça nosso Banco</HomeButtonVideoStyled>
    </HomeVideoContainer>
  );
}

export default HomeVideo;
