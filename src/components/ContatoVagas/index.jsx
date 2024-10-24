import styled from "styled-components";

const ContatoVagasStyled = styled.div`
  height: 80vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 100px;
  display: flex;
  justify-content: center;
  padding-left: 10vw;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    h2 {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.white};
      font-size: 3vw;
    }
    button {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      cursor: pointer;
      width: 15vw;
      font-size: 1.8vw;
      padding: 10px 40px;
      margin-bottom: 10vw;
      transition: background-color 0.3s, color 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  img {
    width: 35vw;
    margin: auto;
  }
`;

function ContatoVagas() {
  return (
    <ContatoVagasStyled>
      <div className="text">
        <h2>
          Faça parte da <br />
          nossa equipe de
          <br /> colaboradores
        </h2>
        <button>Ver vagas</button>
      </div>
      <img src="/images/vagas-img.jpg" alt="imagem vagas" />
    </ContatoVagasStyled>
  );
}

export default ContatoVagas;
