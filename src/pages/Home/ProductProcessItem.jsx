import '../Home/home.scss';


function ProductProcessItem( {image, title, description, hideArrow} ) {
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

export default ProductProcessItem;

