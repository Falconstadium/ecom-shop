import { Link } from "@tanstack/react-router";
import { Navbar } from "flowbite-react";
import { useTranslation } from "react-i18next";

const NavList = () => {
  const { t } = useTranslation("global");

  return (
    <Navbar.Collapse className="uppercase">
      <Link
        to={"/"}
        className="rounded-sm px-2 py-1 font-medium transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
      >
        {t("nav.home")}
      </Link>

      <Link
        to={"/collection"}
        className="rounded-sm px-2 py-1 font-medium transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
      >
        {t("nav.collection")}
      </Link>

      <Link
        to={"/about"}
        className="rounded-sm px-2 py-1 font-medium transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
      >
        {t("nav.about")}
      </Link>

      <Link
        to={"/contact"}
        className="rounded-sm px-2 py-1 font-medium transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
      >
        {t("nav.contact")}
      </Link>
    </Navbar.Collapse>
  );
};

export default NavList;
