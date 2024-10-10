"use client";

import { Link } from "@tanstack/react-router";
import { Button, Footer } from "flowbite-react";
import { useTranslation } from "react-i18next";

export function FooterDown() {
  const { t, i18n } = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Footer container className="rounded-none bg-darker">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="/"
            className="text-md font-semibold text-white"
            by="ecom Shopper™"
            year={2024}
          />
          <Footer.LinkGroup className="flex items-center justify-center gap-4 pt-2 font-medium text-white md:pt-0">
            <Link to={"/"} className="uppercase hover:underline">
              {t("footer.home")}
            </Link>
            <Link to={"/collection"} className="uppercase hover:underline">
              {t("footer.collection")}
            </Link>
            <Link to={"/about"} className="uppercase hover:underline">
              {t("footer.about")}
            </Link>
            <Link to={"/contact"} className="uppercase hover:underline">
              {t("footer.contact")}
            </Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Button.Group>
          <Button onClick={() => handleChangeLang("en")} color="light">
            English
          </Button>
          <Button onClick={() => handleChangeLang("fr")} color="light">
            Français
          </Button>
        </Button.Group>
      </div>
    </Footer>
  );
}
