import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 80px 0;
`;

const VideoStyled = styled.video`
  width: 50%;
`;

const ButtonVideoStyled = styled.button`
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

function Video() {
  return (
    <VideoContainer>
      <VideoStyled
        muted
        autoPlay
        loop
        poster="./images/3P.2023.12 - FOTO HOME.png"
      >
        <source src="./images/banner-video.mp4" type="video/mp4" />
      </VideoStyled>
      <ButtonVideoStyled>Conheça nosso Banco</ButtonVideoStyled>
    </VideoContainer>
  );
}

export default Video;
