import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/about")({
  component: () => {
    const { t } = useTranslation("global");

    return (
      <>
        <Navbar />
        <section className="container mx-auto grid place-content-center place-items-center gap-6 px-4 md:max-w-md lg:max-w-lg">
          <h2 className="text-2xl font-semibold uppercase">{t("nav.about")}</h2>
          <p className="text-balance text-justify text-sm font-medium leading-relaxed text-gray-700 lg:text-base">
            {t("about.description")}
          </p>
        </section>
      </>
    );
  },
});
