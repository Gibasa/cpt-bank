import styled from "styled-components";

const ServicosBannerStyled = styled.div`
  background-image: url("/images/servicos-banner.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 123.4vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding-left: 5vw;
  h2 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3vw;
  }
  button {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    cursor: pointer;
    width: 15vw;
    height: 40px;
    font-size: 1.2vw;
    margin-bottom: 10vw;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

function ServicosBanner() {
  return (
    <ServicosBannerStyled>
      <h2>
        Mais que <br /> um banco, <br /> seu parceiro.
      </h2>
      <button>Solicite seu crédito</button>
    </ServicosBannerStyled>
  );
}

export default ServicosBanner;
