import Container from "../../components/shared/Container";
import { MdOutlinePlayCircle } from "react-icons/md";
function HomePart6() {
  return (
    <div className={"hvs"}>
      <Container>
        <div className={"hvs-video"}>
          <div className="hvs-video-info">
            <div className="hs-car-icons">
              <img src="/images/icon-detalle_6.png" alt="" />
              <img src="/images/icon-detalle_5.png" alt="" />
            </div>
            <p>Conoce nuestro proceso de investigacion</p>
            <a
              href="https://www.youtube.com/watch?v=a1CSYfv3bRk"
              rel="noreferrer"
              target="_blank"
              className="hvs-video-play-btn"
            >
              {/* PONER CAJA DE VIDEO */}
              <MdOutlinePlayCircle />
            </a>
          </div>

          <img src="/images/SLIDE_04.jpg" alt="" />
        </div>

        <div className={"hvs-info"}>
          <div className={"hvs-info-1"}>
            <img src="/images/icon-video-1.png" alt="icono 1" />
            <p>
              «Uilizamos las instalaciones de las mejores fábricas dotadas con la última tecnología.»
            </p>
          </div>
          <div className={"hvs-info-2"}>
            <img src="/images/icon-video-2.png" alt="icono 2" />
            <p>
              «Fabricamos cervezas de gran calidad que reflejen la pureza y belleza de nuestro entorno.»
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePart6;
