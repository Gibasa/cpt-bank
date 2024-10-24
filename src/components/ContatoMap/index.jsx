import styled from "styled-components";

const ContatoMapStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15vw;
  height: 80vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2 {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 3vw;
    }
    p {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.2vw;
    }
  }

  .map {
    iframe {
      width: 100%; /* Tornar o mapa responsivo */
      height: 350px;
    }

    small {
      display: block;
      width: 25vw;
      margin-top: 10px;
      a {
        text-decoration: none;
        font-family: ${({ theme }) => theme.fonts.primary};
      }
    }
  }
`;

function ContatoMap() {
  return (
    <ContatoMapStyled>
      <div className="text">
        <h2>Fale conosco</h2>
        <p>
          Tem alguma dúvida? <br />
          Estamos aqui para te ajudar!
        </p>
        <p>
          Entre em contato através <br />
          do nosso e-mail.
        </p>
        <p>contato@copartnersbank.com.br</p>
        <p>
          {" "}
          Ou fale diretamente <br /> com a gente pelo WhastApp clicando{" "}
          <a href="https://wa.me/+557187676583" target="blank">
            aqui
          </a>
          .
        </p>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.586767279307!2d-38.45696937250218!3d-12.977064543735363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1c09127e57%3A0x8b6e706eeb047aa1!2sAlameda%20Salvador%2C%201057%20-%20Caminho%20das%20%C3%81rvores%2C%20Salvador%20-%20BA%2C%2041820-790!5e0!3m2!1spt-BR!2sbr!4v1729699809887!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Empresa"
        ></iframe>
        <br />
        <small>
          <a
            href="https://www.google.com/maps/place/Alameda+Salvador,+1057+-+Caminho+das+%C3%81rvores,+Salvador+-+BA,+41820-790"
            target="blank"
          >
            Ver mapa maior
          </a>
        </small>
      </div>
    </ContatoMapStyled>
  );
}

export default ContatoMap;
