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
  width: 100%;
  display: flex;
  padding: 3vw 5vw;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 899px) {
    justify-content: center;
    align-items: flex-start;
    padding: 5vw 0;
    gap: 10px;
  }
  .copyright {
    color: white;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.8vw;
    margin-top: 15px;
    @media (max-width: 899px) {
      font-size: 1.8vw;
      margin-left: 5vw;
    }
    @media (max-width: 600px) {
      font-size: 2.8vw;
      margin-left: 5vw;
    }
  }
`;

const FooterLogoStyled = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin: 0 0 20px;
  img {
    height: 3.5vw;
  }
  @media (max-width: 899px) {
    margin: 0 0 0 5vw;
    img {
      height: 5vw;
    }
  }

  @media (max-width: 600px) {
    img {
      height: 6vw;
    }
  }
`;

const FooterTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  margin: 20px 0 0;
  width: 100%;
  flex: 1;
  .footerSocialContact {
    display: flex;
    flex-direction: column;
    gap: 2vw;

    .footerSocial {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .footerSocialIcons {
        display: flex;
        gap: 50px;
        .footerIcon {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2vw;
        }
      }
    }
  }
  .br-mobile {
    display: none;
  }
  .br-pc {
    display: none;
  }
  .footerAdress {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 100%;
      line-height: 22px;
    }
  }
  h3,
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: white;
    font-weight: 200;
  }
  @media (max-width: 899px) {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    margin: 10px auto 0;
    padding: 0 0 0 5vw;
    .footerSocialContact {
      justify-content: center;
      .footerSocial {
        width: 100%;
        .footerSocialIcons {
          .footerIcon {
            font-size: 3vw;
          }
        }
      }
    }
    .br-mobile {
      display: block;
    }
    .br-pc {
      display: none;
    }
    .footerAdress {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 90%;
      h3 {
        width: 100%;
        display: flex;
        text-align: left;
      }
    }
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 0.8rem;
    }
    .footerSocialContact {
      .footerSocial {
        .footerSocialIcons {
          .footerIcon {
            font-size: 5vw;
          }
        }
      }
    }
  }
`;

function Footer() {
  const yearnow = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear);
    return currentYear;
  };
  return (
    <FooterStyled>
      <FooterLogoStyled>
        {" "}
        <img src="/images/logo-white.png" alt="white logo" />
      </FooterLogoStyled>
      <FooterTextStyled>
        <div className="footerSocialContact">
          <div className="footerSocial">
            <h3>
              Siga o Copartners <br className="br-mobile" /> nas redes
            </h3>
            <div className="footerSocialIcons">
              <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
              <FontAwesomeIcon icon={faInstagram} className="footerIcon" />
              <FontAwesomeIcon icon={faLinkedin} className="footerIcon" />
            </div>
          </div>
          <div className="footerContact">
            <h3>Fale com a gente</h3>
            <h3>contato@copartnersbank.com.br</h3>
          </div>
        </div>
        <div className="footerAdress">
          <h3>
            Alameda Salvador, 1057, Sala 1356, Shop. Business Torre América -{" "}
            <br className="br-mobile" />
            Caminho das Arvores - Salvador, BA - <br className="br-pc" />
            41.820-790
          </h3>
        </div>
      </FooterTextStyled>
      <div className="copyright">
        <p>© {yearnow()} Copartners Bank. 00.000.000/0001-00</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
