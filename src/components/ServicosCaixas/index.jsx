import styled from "styled-components";

const ServicosCaixasStyled = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 80px 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px; /* Ajuste a distância entre o texto e as caixas */
  background-color: ${({ theme }) => theme.colors.secondary};

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h2,
    p {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.primary};
    }

    h2 {
      font-size: 3vw;
    }

    p {
      font-size: 1.2vw;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas */
  gap: 50px; /* Ajuste o espaçamento entre as caixas */
  justify-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 30vw;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8vw;
  text-align: center;
  border-radius: 15px;
  padding: 40px;
  p {
    margin: 0;
    line-height: 1.5;
    width: 100%;
    text-align: center;
    font-size: 1.5vw;
  }
`;

function ServicosCaixas() {
  return (
    <ServicosCaixasStyled id="ServicosCaixas">
      <div className="text">
        <h2>Soluções criadas para você:</h2>
      </div>
      <GridContainer>
        <Box>
          <p>
            Financiamento de investimentos e capital de giro, com taxas abaixo
            de CDI.
          </p>
        </Box>
        <Box>
          <p>
            Antecipação de recebiveis com benefícios fiscais e custos
            apropriados.
          </p>
        </Box>
        <Box>
          <p>
            Automatização de pagamentos e recebimentos por API, com liberação de
            mão de obra.
          </p>
        </Box>
        <Box>
          <p>
            Tecnologia para folha de pagamento das empresas e adiantamento
            salarial dos empregados.
          </p>
        </Box>
      </GridContainer>
    </ServicosCaixasStyled>
  );
}

export default ServicosCaixas;
