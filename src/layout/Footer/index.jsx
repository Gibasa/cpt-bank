import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterStyled = styled.div`
  background-image: url("/images/footer-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 40vh;
  width: 100%;
  display: flex;
  padding: 0 5vw;
  align-items: center;
  gap: 100px;
`;

const FooterLogoStyled = styled.img`
  width: 35vw;
  margin: auto;
`;

const FooterTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .footerSocial {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .footerSocialIcons{
      display: flex;
      gap:50px;
      margin-left: 5vw;
      .footerIcon{
        color: ${({ theme }) => theme.colors.white};
        font-size: 2vw;
      }
    }
  }
  .footerAdress p{
    width: 60%;
    line-height: 22px;
  }
  h3,
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: white;
    font-weight: 200;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <FooterLogoStyled
        src="/images/logo-white.png"
        alt="white logo"
      ></FooterLogoStyled>
      <FooterTextStyled>
        <div className="footerSocial">
          <h3>SIGA A COPARTNERS NAS REDES</h3>
          <div className="footerSocialIcons">
          <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
          <FontAwesomeIcon icon={faInstagram} className="footerIcon" />
          <FontAwesomeIcon icon={faLinkedin} className="footerIcon" />
          </div>
          
        </div>
        <div className="footerContact">
          <h3>FALE COM A GENTE</h3>
          <p>contato@copartnersbank.com.br</p>
        </div>
        <div className="footerAdress">
          <p>
            Alameda Salvador, 1057, Sala 1356, Shop. Business Torre América -
            Caminho das Arvores - Salvador, BA <br/>41.820-790
          </p>
        </div>
      </FooterTextStyled>
    </FooterStyled>
  );
}

export default Footer;
