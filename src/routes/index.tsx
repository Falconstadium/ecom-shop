import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { FooterDown } from "../components/Footer";

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <>
        <Navbar />

        <Hero />

        <FooterDown />
      </>
    );
  },
});
