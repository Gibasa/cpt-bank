import styled from "styled-components";
import { useNavigate} from "react-router-dom";
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

  @media (max-width: 699px) {
    margin-top: 10vw;

  }

  @media (min-width: 600px) and (max-width: 899px) {
    margin-top: 10vw;

  }
`;

const ButtonVideoStyled = styled.button`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 10px 40px;
  font-size: 1.8vw;
  transition: background-color 0.3s, color 0.3s;
  margin: 7vw 0;
  cursor: pointer !important;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 599px) {
    padding: 8px 30px;
    font-size: 3vw; 
  }

  @media (min-width: 600px) and (max-width: 899px) {
    padding: 9px 35px;
    font-size: 2.5vw; 
  }
`;




function Video({ video, buttonText, route, section }) {
  const navigate = useNavigate();

  // Função para navegar e fazer o scroll com atraso
  const scrollToSection = (sectionId, delay = 100) => {
    return new Promise((resolve) => {
      navigate(route);
      setTimeout(() => {
        const section = document.getElementById("QSQuemSomos");
        if (section) {
          const offsetPosition = section.offsetTop - 50;
          window.scrollTo({
            top: offsetPosition >= 0 ? offsetPosition : 0,
            behavior: "smooth",
          });
        }
        resolve();
      }, delay);
    });
  };

  const handleClick = () => {
    scrollToSection(section);
  };

  return (
    <VideoContainer>
      <VideoStyled muted autoPlay loop playsInline>
        <source src={`./images/${video}`} type="video/mp4" />
      </VideoStyled>
      {buttonText && (
        <ButtonVideoStyled onClick={handleClick}>
          {buttonText}
        </ButtonVideoStyled>
      )}
    </VideoContainer>
  );
}

Video.propTypes = {
  video: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  offsetTopNum: PropTypes.number.isRequired,
};

export default Video;
