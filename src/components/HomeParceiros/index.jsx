import styled from "styled-components";

const HomeParceirosStyled = styled.div`
display: flex;
`;

const HomeParceirosEsquerda = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 50%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 40px;
  h2,
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    margin: 0 0 0 5vw;
    width: 50%;
  }
  h2 {
    font-size: 3vw;
  }
  p {
    margin-top: 40px;
    font-size: 1.2vw;
    width: 46%;
  }
`;
const HomeParceirosDireita = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 50%;
padding: 6vw 0;
img{
  width: 30%;
}
`;

function HomeParceiros() {
  return (
    <HomeParceirosStyled>
      <HomeParceirosEsquerda>
        <h2>Conheça nosso parceiros:</h2>
        <p>
          Conectamos você às melhores soluções de crédito, através de parcerias
          estratégicas com as principais instituições financeiras do mercado.
        </p>
      </HomeParceirosEsquerda>
      <HomeParceirosDireita>
        <img src="/images/stark-bank.png" alt="Stark Bank logo"/>
        <img src="/images/banco-nordeste.png" alt="Banco do Nordeste logo"/>
        <img src="/images/paraguaçu.png" alt="Paraguaçu logo"/>
        <img src="/images/bs-cash.png" alt="BS Cash logo"/>
      </HomeParceirosDireita>
    </HomeParceirosStyled>
  );
}

export default HomeParceiros;
