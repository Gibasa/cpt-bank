import styled from "styled-components";

const ValoresStyled = styled.div`
  display: flex;
  padding: 3vw 5vw 8vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  gap: 5vw;
  .missao h2,
  .visao h2 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3vw;
    text-decoration: underline;
    text-underline-offset: 10px;
  }
  .missao p,
  .visao p {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2vw;
    line-height: 2vw;
    margin-top: 20px;
    text-align: center;
  }
  .missao,
  .visao {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 2vw;
    flex: 1;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 899px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    .missao h2,
    .visao h2 {
      font-size: 4vw;
    }
    .missao p,
    .visao p {
      font-size: 2vw;
    }
    .missao,
    .visao {
      width: 60%;
    }
  }
  @media (max-width: 600px) {
    .missao h2,
    .visao h2 {
      font-size: 5vw;
    }
    .missao p,
    .visao p {
      font-size: 3vw;
      line-height: 3vw;
    }
    .missao,
    .visao {
      width: 80%;
      padding: 4vw;
    }
  }
`;

function Valores() {
  return (
    <ValoresStyled>
      <div className="missao">
        <h2>Missão</h2>
        <p>
          Empoderar empresas, de todos os portes e segmentos, com soluções
          financeiras inteligentes e personalizadas, que simplificam processos,
          otimizam recursos e geram valor.
        </p>
      </div>
      <div className="visao">
        <h2>Visão</h2>
        <p>
          Ser referência no mercado como a Fintech que transforma a gestão
          financeira das empresas, proporcionando mais eficiência, transparência
          e controle.
        </p>
      </div>
    </ValoresStyled>
  );
}

export default Valores;
