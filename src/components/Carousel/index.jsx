import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselStyled = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  margin: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    h2,
    p {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
    h2{
      font-size: 3vw;
    }
    p{
      font-size: 1.2vw;
    }
  }
  .slick-prev,
  .slick-next {
    width: 4vw;
    height: 3vw;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
  }

  .slick-prev {
    left: -70px;
    background-image: url("/images/seta.png");
    transform: scaleX(-1);
  }

  .slick-next {
    right: -70px;
    background-image: url("/images/seta.png");
  }

  .slick-prev:before,
  .slick-next:before {
    content: "";
  }
`;

const SliderStyled = styled(Slider)`
  width: 80vw;
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Box = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 30vw !important;
  margin: 0 5.5vw;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8vw;
  text-align: center;
  border-radius: 15px;
  padding: 20px;
  p {
    margin: 0;
    line-height: 1.5;
    width: 100%;
    text-align: center;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000, 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Carousel() {
  return (
    <CarouselStyled>
      <div className="text">
        <h2>Temos as melhores parcerias para o seu atendimento:</h2>
        <p>Juntos, construimos soluções sob medida para você. </p>
      </div>
      <SliderStyled {...settings}>
        <Box>
          <p>
            Crédito comercial e <br /> antecipação de recebíveis.
          </p>
        </Box>
        <Box>
          <p>
            Automatização, via API, de pagamaentos e recebimentos bancários, com
            conciliação de contas.
          </p>
        </Box>
        <Box>
          <p>
            Financiamento de investimento e capital de giro, para empresas de
            todos os portes.
          </p>
        </Box>
        <Box>
          <p>
            Tecnologia para folha de pagamento das empresas e adiantamento
            salarial dos empregados.
          </p>
        </Box>
      </SliderStyled>
    </CarouselStyled>
  );
}

export default Carousel;
