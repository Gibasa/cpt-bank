import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const QSEconomizeStyled = styled.div`
  background-image: url("/images/economize-bg.gif");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: ${({ theme }) => theme.colors.terciary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 3vw;
    margin-left: 5vw;
    margin-bottom: 80px;
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
      width: 85%;
    }
  }

  button {
    border: none;
    background-color: white;
    cursor: pointer;
    width: 15vw;
    font-size: 1.8vw;
    padding: 10px 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.3s, color 0.3s;
    color: ${({ theme }) => theme.colors.primary};
    margin: 20px 0 0 10vw;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

function QSEconomize() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId, delay = 100) => {
    return new Promise((resolve) => {
      navigate("/servicos");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetPosition = section.offsetTop - 100;
          window.scrollTo({
            top: offsetPosition >= 0 ? offsetPosition : 0,
            behavior: "smooth",
          });
        }
        resolve();
      }, delay);
    });
  };

  const handleClick = () => {
    scrollToSection("ServicosCaixas");
  };
  return (
    <QSEconomizeStyled>
      <h2>
        Reduzir custos financeiros <br /> é nossa prioridade
      </h2>

      <div className="banner">
        <p>
          Reduzimos em até 80% os custos financeiros das empresas, oferecendo as
          melhores taxas de juros e os prazos mais adequados.
        </p>{" "}
      </div>
      <button onClick={handleClick}>Saiba mais</button>
    </QSEconomizeStyled>
  );
}

export default QSEconomize;
