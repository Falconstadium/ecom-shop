import { Carousel } from "flowbite-react";
import brownShoe from "../assets/brownshoe.jpg";
import blackTshirt from "../assets/black t-shirt.png";
import headphone from "../assets/headphone.png";
import violetShoe from "../assets/violet shoe.jpg";
import brownBoot from "../assets/brown boot.jpg";

const CarouselSlider = () => {
  return (
    <div className="container mx-auto mb-12 h-60 overflow-hidden rounded-md shadow-sm lg:h-72">
      <Carousel slideInterval={3000}>
        <img
          className="w-full object-cover lg:w-96"
          src={brownShoe}
          alt="..."
        />
        <img
          className="w-full object-cover lg:w-96"
          src={headphone}
          alt="..."
        />
        <img
          className="w-full object-cover lg:w-96"
          src={blackTshirt}
          alt="..."
        />
        <img
          className="w-full object-cover lg:w-96"
          src={violetShoe}
          alt="..."
        />
        <img
          className="w-full object-cover lg:w-96"
          src={brownBoot}
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
