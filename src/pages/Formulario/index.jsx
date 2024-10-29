import styled from "styled-components";

const FormularioStyled = styled.div`
  width: 100%;
  max-width: 800px; /* Largura máxima para centralizar o formulário */
  margin: 150px auto 0;
`;

function Formulario() {
  return (
    <FormularioStyled>
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
