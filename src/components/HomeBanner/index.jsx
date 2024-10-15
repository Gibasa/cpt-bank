import styled from "styled-components";

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
  return (
    <HomeBannerStyled>
      <HomeBannerTextStyled>
        <h1>Soluções de crédito <br/>inteligentes.</h1>
        <h3>
          Saiba mais <img src="/images/seta.png" alt="" />
        </h3>
      </HomeBannerTextStyled>
    </HomeBannerStyled>
  );
}

export default HomeBanner;
