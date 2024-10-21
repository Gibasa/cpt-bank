import styled from "styled-components";
import Video from "@/components/Video";
import QSQuemSomos from "@/components/QSQuemsomos";
import QSEconomize from "@/components/QSEconomize";

const QuemSomosStyled = styled.div`
  margin-top: 80px;
`;

function QuemSomos() {
  return (
    <QuemSomosStyled>
      <Video video="quem-somos.mp4" buttonText="Confira nossos serviços" />
      <QSQuemSomos />
      <QSEconomize />
    </QuemSomosStyled>
  );
}

export default QuemSomos;
