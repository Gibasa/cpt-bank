import styled from "styled-components";

const ParceirosStyled = styled.div``;

const ParceirosEsquerda = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h2,
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    margin: 0 0 0 5vw;
    width: 50%;
  }
  h2{
    font-size: 3vw;
  }
  p{
    margin-top: 40px;
    font-size: 1.2vw;
    width: 46%;
  }
`;
const ParceirosDireita = styled.div``;

function Parceiros() {
  return (
    <ParceirosStyled>
      <ParceirosEsquerda>
        <h2>Conheça nosso parceiros:</h2>
        <p>
          Conectamos você às melhores soluções de crédito, através de parcerias
          estratégicas com as principais instituições financeiras do mercado.
        </p>
      </ParceirosEsquerda>
      <ParceirosDireita></ParceirosDireita>
    </ParceirosStyled>
  );
}

export default Parceiros;
