import styled from "styled-components";
import { useNavigate} from "react-router-dom";


const HomeSolucoesStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15vw;
  .homeSolucoesText {
    width: 30%;
    display: flex;
    flex-direction: column;
    h2,
    p {
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fonts.primary};
    }
    h2{
      font-size: 3vw;
    }
    p {
      margin-top: 10px;
      display: flex;
      align-items: center;
      font-size: 1.2vw;
      cursor: pointer;
      font-weight: 600;
    }
    &:hover img{
      transform: translateX(20px);
    }
    img {
      width: 6vw;
      padding-left: 40px;
      cursor: pointer;
      transition: transform 0.3s ease;
      align-self: center;
      justify-self: center;
      &:hover{
        transform: translateX(20px);
      }
    }
  }
  img {
    width: 25%;
  }
`;

function HomeSolucoes() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId, delay = 100) => {
    return new Promise((resolve) => {
      navigate("/servicos");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetPosition = section.offsetTop - 80;
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
    <HomeSolucoesStyled>
      <div className="homeSolucoesText" >
        <h2>Soluções financeiras<br/> sob medida.</h2>
        <p onClick={handleClick}>Saiba mais <img src="/images/seta.png" alt="" /></p>
      </div>
      <img src="/images/solucoes-img.png" alt="Mulher no computador" />
    </HomeSolucoesStyled>
  );
}

export default HomeSolucoes;
