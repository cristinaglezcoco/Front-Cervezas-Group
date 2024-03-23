import NavBarHeader from "../../components/shared/NavBarHeader";
import Footer from "../../components/shared/Footer";
import "./_products.scss";

import Container from "../../components/shared/Container";
import { useContext } from "react";
import { BeersContext } from "../../components/context/beersContext";

function Products() {
  const { beers } = useContext(BeersContext);
  return (
    <>
      <NavBarHeader title="Productos" />

      <Container>
        <div className="products-space">
          <div className="hs-carousel-1">
            <div className="hs-car-icons">
              <img src="/images/icon-detalle_6.png" alt="" />
              <img src="/images/icon-detalle_5.png" alt="" />
            </div>
            <h1>Descubre Nuestra Cervezas</h1>
            <p>
              Explora un mundo de sabor con nuestras cervezas artesanales
              únicas. Descubre la pasión y la calidad en cada sorbo, disponible
              ahora para tu disfrute.
            </p>
            <section className="container-beers">

              <div className="container-beers__each">
                {beers.map((beer) => (
                  <figure key ={beer._id}>
                    <img src={beer.picture} />
                    <figcaption>
                      <span> {beer.nombre} </span>
                      <span> {beer.graduacion} | {beer.fermentacion} | {beer.color} </span>
                      <p> Precio: 3.20€ </p>
                      <button className="purchase">
                      Añadir al carrito
                      </button> 
                    </figcaption>
                  </figure>
                ))} 
              </div>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Products;
