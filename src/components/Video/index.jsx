import styled from "styled-components";
import PropTypes from "prop-types";

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  margin-top: -100px;
`;

const VideoStyled = styled.video`
  width: 100%;
`;

const ButtonVideoStyled = styled.button`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 40px;
  font-size: 1.8vw;
  transition: background-color 0.3s, color 0.3s;
  margin: 80px 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function Video({video}) {
  return (
    <VideoContainer>
      <VideoStyled
        muted
        autoPlay
        loop
      >
        <source src={`./images/${video}`} type="video/mp4" />
      </VideoStyled>
      <ButtonVideoStyled>Conheça nosso Banco</ButtonVideoStyled>
    </VideoContainer>
  );
}

Video.propTypes = {
  video: PropTypes.string.isRequired,
};

export default Video;
