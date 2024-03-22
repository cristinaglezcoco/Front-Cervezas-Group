function CarouselItem({ cerveza }) {
  return (
    <div className={"h-carousel_item"}>
      <div className="h-car-item-cont">
        <div className="h-car-item-cont-img">
          <img src={cerveza.picture} alt="image 1" />
        </div>
        <div className="h-car-item-desc">
          <h4>{cerveza.nombre}</h4>
          <p>
            {cerveza.graduacion} | {cerveza.fermentacion} | {cerveza.color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
