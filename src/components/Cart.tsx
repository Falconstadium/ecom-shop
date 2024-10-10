import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { Button } from "flowbite-react";
import { Link } from "@tanstack/react-router";
import { totalItem, totalPrice } from "../context/cartReducer";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation("global");

  const context = useContext(CartContext);
  if (!context) {
    return <div>Error: CartContext is not available</div>;
  }

  const { cart } = context;

  return (
    <main className="container mx-auto grid min-h-dvh w-full place-content-center py-8 lg:py-0">
      {cart.length === 0 ? (
        <div className="grid place-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 cursor-pointer lg:w-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p className="text-xl font-medium lg:text-3xl">{t("cart.empty")}</p>
          <Link to={"/"}>
            <Button color="blue" size="sm" pill>
              {t("cart.back")}
            </Button>
          </Link>
        </div>
      ) : (
        <div className="mx-auto grid items-center gap-4 py-4 lg:grid-cols-2 lg:gap-0">
          <div className="grid gap-8 lg:gap-4">
            {cart.map((item: any) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="grid place-items-center gap-2 pt-4 lg:pt-0">
            <h5 className="text-md font-normal">
              Total Products:{" "}
              <span className="text-xl font-medium">{totalItem(cart)}</span>
            </h5>
            <h5 className="text-md font-normal">
              Total Prices:{" "}
              <span className="text-xl font-medium">{totalPrice(cart)} Dh</span>
            </h5>
            <Button color="dark" pill>
              {t("cart.checkout")}
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
