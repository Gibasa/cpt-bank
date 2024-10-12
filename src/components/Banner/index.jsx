import styled from "styled-components";

const BannerStyled = styled.div`
  background-image: url(/images/banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const BannerTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8vw 0 0 5vw;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size:3.5vw;
    width: 60%;
  }
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    img {
      width: 6vw;
      padding-left: 40px;
      cursor: pointer;
    }
  }
`;

function Banner() {
  return (
    <BannerStyled>
      <BannerTextStyled>
        <h1>A evolução do crédito</h1>
        <h3>
          Saiba mais <img src="/images/seta.png" alt="" />
        </h3>
      </BannerTextStyled>
    </BannerStyled>
  );
}

export default Banner;
