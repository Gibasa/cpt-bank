import styled from "styled-components";

const HomeParceirosStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  h2,
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  h2 {
    font-size: 3vw;
  }
  p {
    margin-top: 40px;
    font-size: 1.2vw;
  }
`;

// const HomeParceirosEsquerda = styled.div`
//   background-color: ${({ theme }) => theme.colors.primary};
//   width: 50%;
//   height: 90vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   padding-left: 40px;
//   h2,
//   p {
//     font-family: ${({ theme }) => theme.fonts.primary};
//     color: ${({ theme }) => theme.colors.white};
//     margin: 0 0 0 5vw;
//     width: 60%;
//   }
//   h2 {
//     font-size: 3vw;
//   }
//   p {
//     margin-top: 40px;
//     font-size: 1.2vw;
//     width: 46%;
//   }
// `;
// const HomeParceirosDireita = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// align-items: center;
// width: 50%;
// padding: 6vw 0;
// img{
//   width: 30%;
// }
// `;

function HomeParceiros() {
  return (
    <HomeParceirosStyled>
      <h2>Temos as melhores parcerias para o seu atendimento.</h2>
      <p>
        Sua jornada, nossa parceria. Juntos, construimos soluções sob medida para você.
      </p>
    </HomeParceirosStyled>
  );
}

export default HomeParceiros;
