import NavBarHeader from "../../components/shared/NavBarHeader";
import Footer from "../../components/shared/Footer";
import VideoSection from "../Home/VideoSection";
import ProductProcessItem from "../Home/ProductProcessItem";
import "./_about.scss";

function About() {
  return (
    <>
      <NavBarHeader title="Quienes Somos" />

      <section className="container-about">

        <div className="hs-caro">
          <div className="hs-carousel-1">
            <div className="hs-car-icons">
              <img src="/images/icon-detalle_6.png" alt="" />
              <img src="/images/icon-detalle_5.png" alt="" />
            </div>
            <p>
             «Nos propusimos transformar este rústico cereal de gran importancia en épocas pasadas en la alimentación y teitado (tejados de paja de centeno) <span className="orange-about">de las viviendas en estas zonas de alta montaña</span>, en cervezas identificadas con el territorio, deliciosas y únicas, debido a la pureza y origen de sus componentes.»
            </p>
          </div>
        </div>

        <div className="hs3-2">
          <ProductProcessItem
            image={"/images/about-icons-1.png"} //cambiar imagenes de todos
            title={"Cultivo Autóctono"}
            description={
              "Siembra y cosecha de centeno autóctono con éxito."
            }
          />
          <ProductProcessItem
            image={"/images/about-icons-2.png"}
            title={"Malteado Artesanal"}
            description={
              "Elaboración propia de malta de centeno para cervezas únicas."
            }
          />
          <ProductProcessItem
            image={"/images/about-icons-3.png"}
            title={"Teitado Tradicional"}
            description={
              "Colmos obtenidos con destreza de la paja cultivada techan histórico hórreo."
            }
          />
          <ProductProcessItem
            image={"/images/about-icons-4.png"}
            title={"Proyecto Circular"}
            description={
              "Uso integral del grano y paja: cervezas artesanas, colmos teitados."
            }
          />
      </div>

        <VideoSection/>

      </section>

      <Footer />
    </>
  );
}

export default About;
