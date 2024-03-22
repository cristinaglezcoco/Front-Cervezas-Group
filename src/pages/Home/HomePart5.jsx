import { Carousel } from "bootstrap";
function HomePart5() {
  return (
    <div className="py-5">
      <div>
        <h1 className="text-center">Descrubre nuestras cervezas</h1>
        <p className="text-center w-50 mx-auto">
          Nulla imperdiet ultrices quam, et semper nibh fringilla in. Aenean a
          porttitor nisl, sed laoreet mauris. Pellentesque fermentum gravida
          massa, eu ultrices enim tincidunt id.
        </p>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="d-flex py-3">
        {/* PONER LINK MAS CERVEZAS */}
        <button className="btn btn-warning p-3 mx-auto">Ver todas las cervezas</button>
      </div>
    </div>
  );
}

export default HomePart5;
