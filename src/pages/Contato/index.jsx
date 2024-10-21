import styled from "styled-components";
import ContatoVagas from "@/components/ContatoVagas";
import ContatoMap from "@/components/ContatoMap";

const ContatoStyled = styled.div``;

function Contato() {
  return (
    <ContatoStyled>
      <ContatoVagas />
      <ContatoMap />
    </ContatoStyled>
  );
}

export default Contato;
