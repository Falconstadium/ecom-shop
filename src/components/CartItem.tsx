import { Button } from "flowbite-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useTranslation } from "react-i18next";

const CartItem = ({ item }: any) => {
  const { t } = useTranslation("global");

  const { cart, dispatch } = useContext(CartContext);

  const increaseItem = (id: number) => {
    const index = cart.findIndex((p: any) => p.id === id);
    cart[index].quantity < 10 ? dispatch({ type: "increase", id }) : null;
  };
  const decreaseItem = (id: number) => {
    const index = cart.findIndex((p: any) => p.id === id);
    cart[index].quantity > 1 ? dispatch({ type: "decrease", id }) : null;
  };

  return (
    <div className="mx-4 flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-white pb-4 shadow-lg lg:mx-0 lg:flex-row lg:gap-4 lg:px-0 lg:pb-0 lg:pr-8">
      <img src={item.src} className="h-36 w-48 object-cover" alt="product" />
      <div className="grid place-items-center font-medium">
        <h4 className="text-nowrap text-sm font-normal">{item.name}</h4>
        <span className="text-nowrap text-xl">{item.price} Dh</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="rounded-full bg-slate-300 px-2 transition-colors duration-200 ease-in-out hover:bg-slate-500"
          onClick={() => decreaseItem(item.id)}
        >
          -
        </button>
        <button className="text-md font-medium">{item.quantity}</button>
        <button
          className="rounded-full bg-slate-300 px-2 transition-colors duration-200 ease-in-out hover:bg-slate-500"
          onClick={() => increaseItem(item.id)}
        >
          +
        </button>
      </div>
      <Button
        color="failure"
        onClick={() => dispatch({ type: "remove", id: item.id })}
      >
        {t("cart.remove")}
      </Button>
    </div>
  );
};

export default CartItem;
