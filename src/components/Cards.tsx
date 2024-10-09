import { Link } from "@tanstack/react-router";
import { Button } from "flowbite-react";
import { products } from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cards = () => {
  const { dispatch } = useContext(CartContext);

  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    setItems(products.slice(0, 8));
  }, []);

  return (
    <>
      {items?.map((item: any) => {
        return (
          <div
            className="grid gap-4 overflow-hidden rounded pb-4 shadow-xl"
            key={item.id}
          >
            <img
              src={item.src}
              alt="product"
              loading="lazy"
              className="ease h-72 w-full cursor-pointer object-cover transition-all duration-200 hover:scale-110 md:h-60 md:w-52"
            />
            <div className="grid gap-2 text-center">
              <Link
                to={"/product"}
                className="text-sm font-medium capitalize tracking-wide"
              >
                {item.name}
              </Link>
              <h5 className="text-lg font-medium">{item.price} Dh</h5>
              <Button
                className="mx-4"
                size="xs"
                color="blue"
                pill
                onClick={() => dispatch({ type: "add", item: item })}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
