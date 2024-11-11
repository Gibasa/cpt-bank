import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ServicosBannerStyled = styled.div`
  background-image: url("/images/servicos-banner.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 60.8vw;
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
  .br-mobile{
    display: none;
  }
  button {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    cursor: pointer;
    width: 25vw;
    padding: 10px 40px;
    font-size: 1.8vw;
    margin-bottom: 10vw;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  @media (max-width: 899px) {  
    font-size: 2.8vw;
    padding: 10px 10px;
    width: 27vw;
  }
  @media (max-width: 600px) {  
    font-size: 3.8vw;
    width: 32vw;
  }

  }
  @media (max-width: 899px) {  
    h2{
      font-size: 4vw;
    }
    .br-mobile{
      display: block;
    }
    
  }

  @media (max-width: 600px) {  
    h2{
      font-size: 5vw;
      width: 52%;
    }
    .br-class{
      display: none;
    }
  }
`;

function ServicosBanner() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/formulario");
  };
  return (
    <ServicosBannerStyled>
      <h2>
        Mais que <br className="br-mobile"/> um  banco, <br/> seu parceiro.
      </h2>
      <button onClick={handleButtonClick}>Solicite seu crédito</button>
    </ServicosBannerStyled>
  );
}

export default ServicosBanner;
