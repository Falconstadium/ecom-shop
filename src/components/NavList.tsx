import { Link } from "@tanstack/react-router";

const NavList = () => {
  return (
    <ul className="hidden items-center gap-1 text-sm font-medium uppercase tracking-wide md:flex">
      <li>
        <Link
          to={"/"}
          className="rounded-sm px-2 py-1 transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
        >
          home
        </Link>
      </li>
      <li>
        <Link
          to={"/collection"}
          className="rounded-sm px-2 py-1 transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
        >
          collections
        </Link>
      </li>
      <li>
        <Link
          to={"/about"}
          className="rounded-sm px-2 py-1 transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
        >
          about
        </Link>
      </li>
      <li>
        <Link
          to={"/contact"}
          className="rounded-sm px-2 py-1 transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
        >
          contact
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
