import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeBannerStyled = styled.div`
  background-image: url(/images/banner-2.png);
  background-size: cover;
  background-repeat: no-repeat;  
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 599px) {
    height: 50vh;
    background-size: cover;
  }
`;

const HomeBannerTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8vw 0 0 5vw;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 3vw;
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
    &:hover img {
      transform: translateX(20px);
    }
    img {
      width: 6vw;
      padding-left: 40px;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover {
        transform: translateX(20px);
      }
    }
  }

  @media (max-width: 599px) {
    h1 {
      font-size: 5vw;
    }
    h3 {
      font-size: 3.2vw;
      img {
        width: 20vw;
      }
    }
  }
  @media (min-width: 600px) and (max-width: 899px) {
    h1 {
      font-size: 4vw;
    }
    h3 {
      font-size: 2.2vw;
      img {
        width: 10vw;
      }
    }
  }
`;

function HomeBanner() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/formulario");
  };
  return (
    <HomeBannerStyled>
      <HomeBannerTextStyled>
        <h1>
          Crédito inteligente <br />
          pensado para você.
        </h1>
        <h3 onClick={handleButtonClick}>
          Saiba mais <img src="/images/seta.png" alt="" />
        </h3>
      </HomeBannerTextStyled>
    </HomeBannerStyled>
  );
}

export default HomeBanner;
