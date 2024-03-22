import Footer from "../../components/shared/Footer";
import HomePart3 from "./HomePart3";
import HomePart4 from "./HomePart4";
import ImagesGallery from "./ImagesGallery";
import VideoSection from "./VideoSection";
import HomePart2 from "./HomePart2";
import Carousel from "./Carousel";
import HomePart1 from "./HomePart1";
import HomePart7 from "./HomePart7";
import "./home.scss";
export default function Home() {
  return (
    <>
      <HomePart1 />
      <HomePart2 />
      <HomePart3 />
      <HomePart4 />
      <Carousel />
      <VideoSection />
      <HomePart7 />
      <ImagesGallery />
      <Footer />
    </>
  );
}
