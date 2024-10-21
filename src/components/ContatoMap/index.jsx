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
    p{
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
      a{
        text-decoration: none;
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
          Entre em contato conosco através <br />
          do nosso e-mail.
        </p>
        <p>contato@copartnersbank.com.br</p>
      </div>
      <div className="map">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-38.45879495143891%2C-12.978383002624708%2C-38.45525443553925%2C-12.976056806193206&amp;layer=mapnik"
          allowFullScreen
          loading="lazy"
          title="Localização da Empresa"
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=20/-12.977220/-38.457025" target="blank">
            Ver mapa maior
          </a>
        </small>
      </div>
    </ContatoMapStyled>
  );
}

export default ContatoMap;
