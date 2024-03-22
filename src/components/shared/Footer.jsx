import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { TiContacts } from "react-icons/ti";
import Container from "./Container";

function Footer() {
  return (
    <div className={"footer"}>
      <Container>
        <section className={"footer-section"}>
          <div className={"fs-1"}>
            <img src="/images/logo-colmo-cervezas.png" alt="" />
            <p>
              Cervezas Colmo, las primeras cervezas elaboradas con centeno de los Ancares.
            </p>
            <ul className="fs-icons">
              <li>
                <a href="https://www.facebook.com/cervezascolmo/?locale=es_ES" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cervezascolmo/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className={"fs-2"}>
            <h4 className="fs-2-title">Información de contacto</h4>
            <div className="fs-ci-item">
              <div className="fs-ci-item-icon">
                <SlLocationPin />
              </div>
              <div className="fs-ci-item-text">
                <span className="">Nuestra Fábrica</span>
                <div>
                  <span className="">C/ Santibañez 9, 47320, Montemayor de Pililla, Vallalodid, Castilla y León - España</span>
                </div>
              </div>
            </div>
            <div className="fs-ci-item">
              <div className="fs-ci-item-icon">
                <TiContacts />
              </div>
              <div className="fs-ci-item-text">
                <span className="">Contacto:</span>
                <div>
                  <span className="">+34 983 69 40 81</span>
                  <span className="">info@cervezascolmo.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <div className={"footer_line"}></div>
      <Container>
        <footer className={"footer_text"}>
          © Todos los derechos reservados - 2024
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
