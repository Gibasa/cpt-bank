import styled from "styled-components";

const ContatoVagasStyled = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 100px;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 5vw 5vw;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    h2 {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.white};
      font-size: 3vw;
      margin-top: 10vw;
    }
    button {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      cursor: pointer;
      width: 15vw;
      font-size: 1.8vw;
      padding: 10px 10px;
      margin-bottom: 10vw;
      transition: background-color 0.3s, color 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .btn-mobile {
    display: none;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    cursor: pointer;
    width: 20vw;
    font-size: 2.2vw;
    padding: 10px;
    margin-bottom: 10vw;
    margin-left: 5vw;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .br-mobile {
    display: none;
  }

  img {
    width: 35vw;
    margin: auto;
  }
  @media (max-width: 899px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;
    padding: 10vw 0 0;
    margin: 10vw auto 0;
    .br-class {
      display: none;
    }
    .br-mobile {
      display: block;
    }
    .text {
      text-align: left;
      margin: 0 0 0 5vw;
      gap: 20px;
      h2 {
        font-size: 4vw;
        margin-top: 5vw;
      }
      button {
        width: 25vw;
        font-size: 2.2vw;
      }
    }
    .btn-pc {
      display: block;
    }
    .btn-mobile {
      display: none;
    }
    img {
      width: 90vw;
      margin: 5vw 5vw 0 5vw;
    }
  }
  @media (max-width: 600px) {
    .text{
      button{
        font-size: 3.2vw;
        width: 35vw;
        padding: 10px;
      }
    }
  }
`;

function ContatoVagas() {
  return (
    <ContatoVagasStyled>
      <div className="text">
        <h2>
          Faça parte da <br className="br-class" />
          nossa <br className="br-mobile" />
          equipe de
          <br className="br-class" /> colaboradores
        </h2>
        <button className="btn-pc">Ver vagas</button>
      </div>
      <img src="/images/vagas-img.jpg" alt="imagem vagas" />
      <button className="btn-mobile">Ver vagas</button>
    </ContatoVagasStyled>
  );
}

export default ContatoVagas;
