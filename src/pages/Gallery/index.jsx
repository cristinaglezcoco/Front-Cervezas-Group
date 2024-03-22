import NavBarHeader from "../../components/shared/NavBarHeader";
import Footer from "../../components/shared/Footer";
import "./_gallery.scss";
import Container from "../../components/shared/Container";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { useState, useRef } from "react";

const images = [
  "/images/gallery-photo-1.jpg",
  "/images/gallery-photo-2.jpg",
  "/images/gallery-photo-3.jpg",
  "/images/gallery-photo-4.jpg",
  "/images/gallery-photo-5.jpg",
  "/images/gallery-photo-6.jpg",
  "/images/gallery-photo-7.jpg",
  "/images/gallery-photo-8.jpg",
  "/images/gallery-photo-9.jpg",
  "/images/gallery-photo-10.jpg",
  "/images/gallery-photo-11.jpg",
  "/images/gallery-photo-12.jpg",
];
function Gallery() {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <>
      <NavBarHeader title="Galería" />
      <Container>
        <ImageComplete setImageUrl={setImageUrl} img={imageUrl} />
        <div className="container-gallery">
          {images.map((img, index) => (
            <GalleryItem setImageUrl={setImageUrl} key={index} img={img} />
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Gallery;

const GalleryItem = ({ img, setImageUrl }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-link" onClick={() => setImageUrl(img)}>
        <IoSearchCircleOutline />
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export const ImageComplete = ({ img, setImageUrl }) => {
  let claseActiva = "";
  if (img) {
    claseActiva = "active";
  }
  const imgRef = useRef(null);
  const handleClick = (e) => {
    if (!imgRef.current.contains(e.target)) {
      setImageUrl(null);
    }
  };

  return (
    <div onClick={handleClick} className={"image-complete " + claseActiva}>
      <div className="image-complete-close" onClick={() => setImageUrl(null)}>
        <FaTimes />
      </div>
      <img ref={imgRef} src={img} alt="" />
    </div>
  );
};
