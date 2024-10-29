import styled from "styled-components";

const FormularioStyled = styled.div`
  width: 100%;
  margin: 150px 0;
  display: flex;

  .CTAFormulario {
    width: 40%;
    margin-top: 50px;
    margin-left: 9vw;
    img {
      width: 30vw;
    }
    h2 {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 3vw;
    }
    p{
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.3vw;
      margin-bottom: 50px;
    }
  }
`;

function Formulario() {
  return (
    <FormularioStyled>
      <div className="CTAFormulario">
        <h2>
          Personalize a <br/>sua experiência.
        </h2>
        <p>Temos a solução perfeita para você</p>
        <img
          src="/images/solucoes-img.png"
          alt="mulher sentada no computador com café na mão"
        />
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeO5CwrPDEGiiC9ZzTBvGt6OXoHkeyib45UPa-JIcbMu4fkYw/viewform?embedded=true"
        width="100%"
        height="2700"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </FormularioStyled>
  );
}

export default Formulario;
