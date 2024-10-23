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
    margin: 40px 0 20px 0;
    padding: 20px 0;
    p {
      font-size: 1.2vw;
      line-height: 30px;
      padding: 10px 40px 10px 5vw;
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.white};
      width: 80%;
    }
  }

  button {
    border: none;
    background-color: white;
    cursor: pointer;
    width: 10vw;
    height: 2.5vw;
    font-size: 1.2vw;
    color: ${({ theme }) => theme.colors.primary};
    margin: 20px 0 0 10vw;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

function QSEconomize() {
  return (
    <QSEconomizeStyled>
      <h2>
        Reduzir custos financeiros <br /> é nossa prioridade
      </h2>

      <div className="banner">
        <p>
          Reduzimos em até 80% os custos financeiros das empresas, oferecendo
          prazos mais longos e melhor gestão de dívidas.
        </p>{" "}
      </div>
      <button>Saiba mais</button>
    </QSEconomizeStyled>
  );
}

export default QSEconomize;
