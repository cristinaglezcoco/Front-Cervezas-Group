// CREAR CAJA DE IMAGEN ZOOM

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
const GalleryItem = ({ image }) => {
  return (
    <div className={"hs-gallery-item"}>
      <img src={image} alt="" />
    </div>
  );
};

function HomePart8() {
  return (
    <div className={"hs-gallery"}>
      {images.map((image, index) => (
        <GalleryItem image={image} key={index} />
      ))}
    </div>
  );
}

export default HomePart8;
