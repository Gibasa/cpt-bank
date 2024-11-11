import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const QSEconomizeStyled = styled.div`
  background-image: url("/images/economize-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vw 0;
  h2 {
    color: ${({ theme }) => theme.colors.terciary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 3vw;
    margin-left: 5vw;
    margin-bottom: 80px;
  }
  .banner {
    width: 35vw;
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
  .br-mobile {
    display: none;
  }

  button {
    border: none;
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
  @media (max-width: 899px) {
    h2 {
      margin-bottom: 5vw;
      font-size: 4vw;
    }
    .banner {
      width: 60vw;
      p {
        font-size: 2.2vw;
      }
    }
    button {
      font-size: 2.8vw;
      width: 22vw;
      padding: 10px 10px;
    }
    .br-class {
      display: none;
    }
    .br-mobile {
      display: block;
    }
  }
  @media (max-width: 600px) {
    background-position: center;
    h2{
      font-size: 5vw;
      margin-top: 10vw;
    }
    .banner p{
      font-size: 3.2vw;
      line-height: 4vw;
    }
    button {
      font-size: 3.8vw;
      width: 27vw;      
    }
    .br-mobile{
      display: block;
    }
    .br-class {
      display: none;
    }
  }
`;

function QSEconomize() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/formulario");
  };

  return (
    <QSEconomizeStyled>
      <h2>
        Reduzir custos <br className="br-mobile" /> financeiros{" "}
        <br className="br-class" /> é <br className="br-mobile" />
        nossa <br className="br-mobile" />prioridade
      </h2>

      <div className="banner">
        <p>
          Reduzimos em até 80% os custos financeiros das empresas, oferecendo as
          melhores taxas de juros e os prazos mais adequados.
        </p>{" "}
      </div>
      <button onClick={handleButtonClick}>Saiba mais</button>
    </QSEconomizeStyled>
  );
}

export default QSEconomize;
