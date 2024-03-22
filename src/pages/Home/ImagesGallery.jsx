// CREAR CAJA DE IMAGEN ZOOM

const images = [
  "/images/gallery-home-1.jpg",
  "/images/gallery-home-2.jpg",
  "/images/gallery-home-3.jpg",
  "/images/gallery-home-4.jpg",
  "/images/gallery-home-5.jpg",
  "/images/gallery-home-6.jpg",
  "/images/gallery-home-7.jpg",
  "/images/gallery-home-1.jpg",
  "/images/gallery-home-2.jpg",
  "/images/gallery-home-3.jpg",
  "/images/gallery-home-4.jpg",
  "/images/gallery-home-5.jpg",
  "/images/gallery-home-6.jpg",
  "/images/gallery-home-7.jpg",
  "/images/gallery-home-1.jpg",
  "/images/gallery-home-2.jpg",
  "/images/gallery-home-3.jpg",
  "/images/gallery-home-4.jpg",
  "/images/gallery-home-5.jpg",
  "/images/gallery-home-6.jpg",
  "/images/gallery-home-7.jpg",
];
const GalleryItem = ({ image }) => {
  return (
    <div className={"hs-gallery-item"}>
      <img src={image} alt="" />
    </div>
  );
};

function ImagesGallery() {
  return (
    <div className={"hs-gallery"}>
      {images.map((image, index) => (
        <GalleryItem image={image} key={index} />
      ))}
    </div>
  );
}

export default ImagesGallery;
