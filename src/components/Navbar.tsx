import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navbar } from "flowbite-react";
import logo from "../assets/baggage-claim.svg";

const HeaderNav = () => {
  const context = useContext(CartContext);
  if (!context) {
    return <div>Error: CartContext is not available</div>;
  }

  const { cart } = context;

  return (
    <>
      <Navbar fluid rounded className="sticky top-0 z-50 px-4 py-3 lg:px-8">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-lg font-semibold lg:text-xl"
        >
          <img src={logo} className="w-5" alt="logo" />
          yasriShop
        </Link>
        <div className="flex items-center gap-4 md:order-2">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <div className="relative flex items-center justify-center">
              <Link to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </Link>
              <span className="absolute right-1/2 top-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs">
                {cart.length}
              </span>
            </div>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="uppercase">
          <Link
            to={"/"}
            className="rounded-sm px-2 py-1 font-medium transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
          >
            home
          </Link>

          <Link
            to={"/collection"}
            className="rounded-sm px-2 py-1 font-medium transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
          >
            collections
          </Link>

          <Link
            to={"/about"}
            className="rounded-sm px-2 py-1 font-medium transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
          >
            about
          </Link>

          <Link
            to={"/contact"}
            className="rounded-sm px-2 py-1 font-medium transition-colors duration-200 ease-in-out hover:bg-slate-800 hover:text-light [&.active]:bg-slate-950 [&.active]:text-light"
          >
            contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderNav;
