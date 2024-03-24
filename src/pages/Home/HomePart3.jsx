import Container from "../../components/shared/Container";

function HomePart3() {
  return (
    <div className="hs3">
      <Container>
        <div className="hs3-content">
          <div className="hs3-1">
            <h2>
              «Proyecto que nace, para{" "}
              <span className="text-warning">promover el cultivo del centeno y toda la cultura que le rodea,</span> ,
              colaborando en la recuperación de tejados de teito y otras artes relacionadas con este cereal.»
            </h2>
          </div>
          <ProductProcessList />
        </div>
      </Container>
    </div>
  );
}

export default HomePart3;


export function ProductProcessList() {
  return (
      <div className="hs3-2">
        <ProductProcessItem
          image={"/images/beer-icon-1.png"}
          title={"Maceración de Malta"}
          description={
            "Combinación de granos de malta con agua caliente para extraer azúcares fermentables."
          }
        />
        <ProductProcessItem
          image={"/images/beer-icon-2.png"}
          title={"Filtración y Ebullición"}
          description={
            "Filtrado del mosto y ebullición con lúpulo para esterilizar y añadir sabor."
          }
        />
        <ProductProcessItem
          image={"	/images/beer-icon-3.png"}
          title={"Fermentación y Enfriamiento"}
          description={
            "Enfriamiento del mosto y fermentación con levadura para convertir azúcares en alcohol."
          }
        />
        <ProductProcessItem
          image={"/images/beer-icon-4.png"}
          title={"Filtrado y Embotellado"}
          hideArrow={true}
          description={
            "Filtrado final para eliminar residuos y embotellado para preservar la frescura."
          }
        />
      </div>
    );
}


export function ProductProcessItem( {image, title, description, hideArrow} ) {
  return (
      <div className="hs3-item">
        <div className="hs3-item-img">
          <div className="hs3-bg-round">
            <img
              className={hideArrow ? "hs3-hidden-arrow hs3-row" : "hs3-row"}
              src="/images/arrow-cervezas_3.png"
              alt=""
            />
          </div>
          <img className="ppi-image" src={image} alt={title} />
        </div>
        <div className="hs3-item-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
}
