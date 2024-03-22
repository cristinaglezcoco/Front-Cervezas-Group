import Container from "../../components/shared/Container";
function HomePart2() {
  return (
    <section className="hp2">
      <Container>
        <div className="hp2-content">
          <div className="hp2-text">
            <p>
              Descubre el arte de la cerveza artesanal <br />{" "}
              {'"sabores Unicos"'}
            </p>
          </div>
          <ul className="hp2-icons">
            <li>
              <img src="/images/iconos-home-slider_1.png" alt="" />
              <span>Maltas Especiales</span>
            </li>
            <li>
              <img src="/images/iconos-home-slider_2.png" alt="" />
              <span>Lúpulos aromaticos</span>
            </li>
            <li>
              <img src="/images/iconos-home-slider_3.png" alt="" />
              <span>Agua de Calidad</span>
            </li>
            <li>
              <img src="/images/iconos-home-slider_4.png" alt="" />
              <span>Cervezas Artesanales</span> 
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default HomePart2;
