import styled from "styled-components";
import Video from "@/components/Video";
import QSQuemSomos from "@/components/QSQuemsomos";
import QSEconomize from "@/components/QSEconomize";

const QuemSomosStyled = styled.div``;

function QuemSomos() {
  return (
    <QuemSomosStyled>
      <Video />
      <QSQuemSomos />
      <QSEconomize/>
    </QuemSomosStyled>
  );
}

export default QuemSomos;
