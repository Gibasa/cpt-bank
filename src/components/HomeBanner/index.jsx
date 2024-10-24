import styled from "styled-components";
import { useNavigate} from "react-router-dom";


const HomeBannerStyled = styled.div`
  background-image: url(/images/banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const HomeBannerTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8vw 0 0 5vw;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size:3vw;
    width: 100%;
    
  }
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    cursor: pointer;
    &:hover img{
      transform: translateX(20px);
    }
    img {
      width: 6vw;
      padding-left: 40px;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
        transform: translateX(20px);
      }
    }
  }
`;

function HomeBanner() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId, delay = 100) => {
    return new Promise((resolve) => {
      navigate("/servicos");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetPosition = section.offsetTop - 80;
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
    scrollToSection("ServicosCaixas");
  };
  return (
    <HomeBannerStyled>
      <HomeBannerTextStyled>
        <h1>Crédito inteligente <br/>pensado para você.</h1>
        <h3 onClick={handleClick}>
          Saiba mais <img src="/images/seta.png" alt="" />
        </h3>
      </HomeBannerTextStyled>
    </HomeBannerStyled>
  );
}

export default HomeBanner;
