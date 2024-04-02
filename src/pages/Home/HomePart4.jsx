import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";

function HomePart4() {
  return (
    <div className="hs4">
      <Container>
        <div className="hs4-content">
          <div className="hs4-cont-1">
            <div className="hs4-icon">
              <img src="/images/icon-part-4_1-01.png" alt="" />
            </div>
            <div className="hs4-day-production">
              <h1>690</h1>
              <h3>litros/día</h3>
            </div>
          </div>
          <div className="hs4-main-text">
            «En Cervezas Colmo tenemos muy marcado nuestro objetivo,<span className=""> fabricar cervezas de gran calidad,</span> que reflejen la pureza y belleza de nuestro entorno.»
          </div>
          {/* // PONER LINK */}
         <Link className="hs4-button" to = "/about" >Quienes Somos</Link>
        </div>
      </Container>
    </div>
  );
}
export default HomePart4;
