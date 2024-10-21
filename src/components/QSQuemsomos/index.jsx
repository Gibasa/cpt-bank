import styled from "styled-components";

const QSQuemSomosStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  background-color: white;
  gap: 50px;
  .text {
    font-family: ${({ theme }) => theme.fonts.primary};
    width: 40%;
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h2{
      font-size: 3vw;
    }
    p{
      font-size: 1.2vw;
    }
  }
  img {
    width: 40%;
    margin: auto;
  }
`;

function QSQuemSomos() {
  return (
    <QSQuemSomosStyled>
      <div className="text">
        <h2>
          Quem
          <br />
          Somos
        </h2>{" "}
        <p>
          Somos uma Fintech com equipe liderada por José Gomes da Costa, ex-CEO
          do Banco do Nordeste, economista e mestre em economia pela UFPE, MBA
          em finanças pela EPGE-FGV-RJ e especialização em “Banking” pela
          EAESP-FGV-SP, com larga experiência no setor bancário, agora do lado
          dos clientes.
        </p>
      </div>
      <img src="/images/banner.png" alt="" />
    </QSQuemSomosStyled>
  );
}

export default QSQuemSomos;
