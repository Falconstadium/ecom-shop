import { Carousel } from "flowbite-react";
import brownShoe from "../assets/brownshoe.jpg";
import blackTshirt from "../assets/black t-shirt.png";
import headphone from "../assets/headphone.png";

const CarouselSlider = () => {
  return (
    <div className="mb-12 h-56 overflow-hidden rounded-md bg-slate-200 shadow-sm sm:h-64 lg:h-80">
      <Carousel slideInterval={3000}>
        <img
          className="w-full object-cover lg:w-96"
          src={brownShoe}
          alt="..."
        />
        <img
          className="w-full object-cover lg:w-96"
          src={blackTshirt}
          alt="..."
        />
        <img
          className="w-full object-cover lg:w-96"
          src={headphone}
          alt="..."
        />
        {/* <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        /> */}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
