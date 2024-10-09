import { createFileRoute } from "@tanstack/react-router";
import { FooterDown } from "../components/Footer";
import Contact from "../components/Contact";

export const Route = createFileRoute("/contact")({
  component: () => {
    return (
      <article className="grid min-h-dvh grid-rows-[1fr_auto]">
        <Contact />
        <FooterDown />
      </article>
    );
  },
});
