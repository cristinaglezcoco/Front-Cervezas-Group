// CREAR CAJA DE IMAGEN ZOOM

import { useRef } from "react";

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
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseLeave = () => {
      isDown = false;
      carousel.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      carousel.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 3;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener("mousedown", (e) => {
      isDown = true;
      carousel.classList.add("active");
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mousemove", handleMouseMove);

    // Clean up event listeners when the component unmounts
    return () => {
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mousemove", handleMouseMove);
    };
  };

  return (
    <div
      ref={carouselRef}
      className={"hs-gallery"}
      onMouseDown={handleMouseDown}
      style={{ overflowX: "scroll" }}
    >
      {images.map((image, index) => (
        <GalleryItem image={image} key={index} />
      ))}
    </div>
  );
}

export default HomePart8;
