import styled from "styled-components";

const QSEconomizeStyled = styled.div`
  background-image: url("/images/economize-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 3vw;
    margin-left: 5vw;
  }
  .banner {
    width: 35%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0 40px 40px 0;
    margin: 20px 0;
    padding: 20px 0;
    p {
      font-size: 1.2vw;
      padding: 10px 40px 10px 5vw;
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.white};
      width: 80%;
    }
  }

  button{
    border: none;
    background-color: white;
    cursor: pointer;
    width: 10vw;
    height: 2.5vw;
    font-size: 1.2vw;
    color: ${({ theme }) => theme.colors.primary};
    margin: 20px 0 0 10vw;
    &:hover{
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

function QSEconomize() {
  return (
    <QSEconomizeStyled>
      <h2>
        Economize até 80%
      </h2>

      <div className="banner">
        <p>
          Com o CopartnersBank, sua empresa pode reduzir em até 0,6% a.m. seus
          gastos, alongar prazos e otimizar o fluxo de caixa.
        </p>{" "}
        <p>Mais lucro, menos preocupações.</p>
      </div>
      <button>Saiba mais</button>
    </QSEconomizeStyled>
  );
}

export default QSEconomize;
