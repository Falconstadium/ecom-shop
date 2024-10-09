import Cards from "./Cards";
import CarouselSlider from "./CarouselSlider";
import EmailForm from "./EmailForm";

const Hero = () => {
  return (
    <main className="container m-auto mt-8 w-full px-4 pb-8 lg:px-0">
      <CarouselSlider />
      <div className="m-auto flex w-full flex-wrap items-center justify-center gap-12 lg:gap-16">
        <Cards />
      </div>
      <EmailForm />
    </main>
  );
};

export default Hero;
