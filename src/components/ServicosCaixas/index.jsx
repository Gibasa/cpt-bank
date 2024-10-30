import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  gap: 50px;
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
  .action-button {
    border: none;
    background-color: white;
    cursor: pointer;
    font-size: 1.8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s, color 0.3s;
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px 40px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas */
  gap: 50px; /* Ajuste o espaçamento entre as caixas */
  justify-items: center;
  margin-top: 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
  width: 30vw;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8vw;
  text-align: center;
  border-radius: 15px;
  padding: 40px;
  position: relative;
  transition: transform 0.3s ease-in-out;

  p {
    margin: 0;
    line-height: 1.5;
    width: 100%;
    text-align: center;
    font-size: 1.5vw;
  }

  .button-box {
    border: none;
    background-color: white;
    cursor: pointer;
    font-size: 1.3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s, color 0.3s;
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px 40px;
    margin-top: 1vw;
    gap: 10px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Modal = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;

  .modal-content {
    background-color: white;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.3vw;
    padding: 30px;
    border-radius: 15px;
    width: 60%;
    max-width: 700px;
    text-align: center;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.terciary};
    font-weight: bold;
    transition: color 0.3s;
  }
`;

function ServicosCaixas() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const navigate = useNavigate();

  const handleBoxClick = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "modalBackground") {
      closeModal();
    }
  };

  const handleButtonClick = () => {
    navigate("/formulario");
  };

  return (
    <ServicosCaixasStyled id="ServicosCaixas">
      <div className="text">
        <h2>Soluções criadas para você:</h2>
      </div>
      <GridContainer>
        <Box
          onClick={() =>
            handleBoxClick(
              "Financiamento de capital de giro e de investimentos com taxas a partir de 0,6%a.m. Sem cobrança de IOF e com prazos de até 36 meses para capital de giro e até 12 anos para operações de investimento, incluindo capital de giro associado ao investimento e até 2 anos de carência"
            )
          }
        >
          <p>
            Financiamento de investimentos e capital de giro, com taxas abaixo
            de CDI.
          </p>

          <button className="button-box">
            Saiba mais
            <div className="arrow">➔</div>
          </button>
        </Box>
        <Box
          onClick={() =>
            handleBoxClick(
              "Antecipação de boletos e outros títulos de crédito derivados de vendas recorrentes, mediante  a utilização de recursos de FIDICs, possibilitando uma melhor gestão tributaria e economia financeira para a empresa credora"
            )
          }
        >
          <p>
            Antecipação de recebíveis com benefícios fiscais e custos
            apropriados.
          </p>
          <button className="button-box">
            Saiba mais
            <div className="arrow">➔</div>
          </button>
        </Box>
        <Box
          onClick={() =>
            handleBoxClick(
              "Utilização de API para automatização das transações recorrentes de pagamentos de títulos e obrigações em larga escala, além de recebimentos e conciliação de contas, para otimizar as transações, aumentando a eficiência e possibilitando a liberação de mão de obra"
            )
          }
        >
          <p>
            Automatização de pagamentos e recebimentos por API, com liberação de
            mão de obra.
          </p>
          <button className="button-box">
            Saiba mais
            <div className="arrow">➔</div>
          </button>
        </Box>
        <Box
          onClick={() =>
            handleBoxClick(
              "Realização dos serviços de processamento de folha de pagamento das empresas, com abertura de contas automáticas para os empregados e a realização de operações de antecipação de salários."
            )
          }
        >
          <p>
            Tecnologia para folha de pagamento das empresas e adiantamento
            salarial dos empregados.
          </p>
          <button className="button-box">
            Saiba mais
            <div className="arrow">➔</div>
          </button>
        </Box>
      </GridContainer>
      <Box
          onClick={() =>
            handleBoxClick(
              "Operações de alienação de imóveis para utilização dos recursos no capital de giro de empresas que não conseguem acesssr as linhas de capital de giro tradicionais, com taxas a partir de 1,1%a.m. E prazo de até 60 meses para pagar."
            )
          }
        >
          <p>
          Operações de home equity, para capital de giro, com vinculação de imóveis.
          </p>
          <button className="button-box">
            Saiba mais
            <div className="arrow">➔</div>
          </button>
        </Box>
      <button className="action-button" onClick={handleButtonClick}>
        Solicite seu atendimento personalizado
      </button>

      {/* Modal */}
      <Modal
        isVisible={modalVisible}
        id="modalBackground"
        onClick={handleOutsideClick}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <p>{modalContent}</p>
        </div>
      </Modal>
    </ServicosCaixasStyled>
  );
}

export default ServicosCaixas;
