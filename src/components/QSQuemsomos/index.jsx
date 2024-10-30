import styled from "styled-components";

const QSQuemSomosStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  gap: 50px;
  .text {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.terciary};
    width: 40%;
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h2 {
      font-size: 3vw;
    }
    p {
      font-size: 1.3vw;
      line-height: 30px;
    }
  }
  img {
    width: 40%;
    margin: auto;
  }
`;

function QSQuemSomos() {
  return (
    <QSQuemSomosStyled id="QSQuemSomos">
      <div className="text">
        <h2>Quem somos</h2>{" "}
        <p>
          Somos uma Fintech formada por equipe multidisciplinar e experiente,
          sob a liderança de José Gomes da Costa, ex-CEO do Banco do Nordeste,
          ex-diretor financeiro e de crédito, ex-membro do conselho de
          administração do banco. Economista e mestre em economia pela UFPE,
          com larga formação acadêmica (EPGE-FGV-RJ, EAESP-FGV-SP, Fundação Dom
          Cabral) e grande experiência no mercado financeiro e de crédito.
        </p>
      </div>
      <img src="/images/quem-somos-img.jpg" alt="" />
    </QSQuemSomosStyled>
  );
}

export default QSQuemSomos;
