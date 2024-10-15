import styled from "styled-components";

const HomeSolucoesStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15vw;
  .homeSolucoesText {
    width: 30%;
    display: flex;
    flex-direction: column;
    h2,
    p {
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fonts.primary};
    }
    h2{
      font-size: 3vw;
    }
    p {
      margin-top: 10px;
      display: flex;
      align-items: center;
      font-size: 1.2vw;
      cursor: pointer;
    }
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
  img {
    width: 25%;
  }
`;

function HomeSolucoes() {
  return (
    <HomeSolucoesStyled>
      <div className="homeSolucoesText">
        <h2>Temos soluções financeiras sob medida para você</h2>
        <p>Saiba mais <img src="/images/seta.png" alt="" /></p>
      </div>
      <img src="/images/solucoes-img.png" alt="Mulher no computador" />
    </HomeSolucoesStyled>
  );
}

export default HomeSolucoes;
