import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";
import NavBarHome from "../../components/shared/NavBarHome";
export default function HomePart1() {
  return (
    <section className="hs1">
      <Container>
        <NavBarHome />
        <div className="div-img-left-hop"></div>
        <div className="div-img-rigth-hop"></div>

        <div className="hs1c">
          <div className="hs1c-1">
            <div className="hs1c-title">
              <span className="craft-beer">LAS ARTESANAS DE </span>
              <span className="brewery">CENTENOS MAS PURA</span>
            </div>
            <p className="hs1c-text">
            Cervezas Colmo, las primeras cervezas elaboradas con centeno de los  Ancares. Un proyecto circular y social que  va más allá de una cerveza.
            </p>
            <button className="hs1c-button"><Link to="/about">Más información</Link></button>
          </div>
          <div className="hs1c-2">
            <img
              className="home-beer-img"
              src="/images/beer-home.png"
              alt="colmo"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
