import styled from "styled-components";

const FormularioStyled = styled.div`
  width: 100%;
  margin: 150px 0;
  display: flex;
  justify-content: center;
  padding: 0 5vw;

  .CTAFormulario {
    width: 40%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
      width: 30vw;
    }
    h2 {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 3vw;
    }
    p {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.3vw;
      margin-bottom: 50px;
    }
  }
  .iframeContainer {
    width: 97.5vw;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .CTAFormulario {
      width: 100%;
      h2 {
        font-size: 5vw;
        .br-pc {
          display: none;
        }
      }
      p {
        font-size: 2.3vw;
      }
      img {
        display: none;
      }
    }
  }
`;

function Formulario() {
  return (
    <FormularioStyled>
      <div className="CTAFormulario">
        <h2>
          Personalize a <br className="br-pc" />
          sua experiência.
        </h2>
        <p>Temos a solução perfeita para você</p>
        <img
          src="/images/solucoes-img.png"
          alt="mulher sentada no computador com café na mão"
        />
      </div>
      <div className="iframeContainer">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeO5CwrPDEGiiC9ZzTBvGt6OXoHkeyib45UPa-JIcbMu4fkYw/viewform?embedded=true"
          width="100%"
          height="3700"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </FormularioStyled>
  );
}

export default Formulario;
