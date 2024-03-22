import ProductProcessItem from '../Home/ProductProcessItem';

function ProductProcessList() {
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

export default ProductProcessList;