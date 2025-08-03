import Slider from "react-slick";
import img1 from "@/assets/travel1.jpg";
import img2 from "@/assets/nature.jpg";
import img3 from "@/assets/nature1.jpg";
import img4 from "@/assets/nature3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [img1, img2, img3, img4];

export default function Banner() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    dots: true,
  };

  return (
    <section className="relative min-h-screen min-w-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <div
              className="h-screen w-full bg-center bg-cover brightness-50"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        ))}
      </Slider>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 text-white text-center w-3/4 sm:w-1/2 lg:w-1/3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-shadow-xs">
          Explore. Dream. <br /> Discover
        </h1>
        <p className="text-lg lg:text-xl text-shadow-2xs font-semibold leading-relaxed">
          This is a travel blog about beautiful hidden destinations around the
          world.
        </p>
      </div>
    </section>
  );
}
