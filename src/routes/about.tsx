import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/about")({
  component: () => {
    return (
      <>
        <Navbar />
        <section className="container mx-auto grid min-h-dvh place-content-center place-items-center gap-6 px-4 md:max-w-md lg:max-w-lg">
          <h2 className="text-2xl font-semibold uppercase">About :</h2>
          <p className="text-center text-sm font-medium leading-relaxed text-gray-700 md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nobis unde sunt officia? Voluptate mollitia provident officiis
            minus? Dolorum atque sint ducimus fuga ex omnis repudiandae dicta
            quis blanditiis quibusdam.
          </p>
        </section>
      </>
    );
  },
});
