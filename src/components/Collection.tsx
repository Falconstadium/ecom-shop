import { Link } from "@tanstack/react-router";
import { products } from "../assets/assets";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useTranslation } from "react-i18next";

const Collection = () => {
  const { t } = useTranslation("global");

  const { dispatch } = useContext(CartContext);

  return (
    <main className="container mx-auto mt-8 grid place-content-center px-4">
      <div className="grid place-items-center gap-1 pb-4 text-center">
        <h2 className="text-2xl font-semibold capitalize">
          {t("nav.collection")}
        </h2>
        <p className="text-sm text-gray-700">{t("collection.parag")}</p>
      </div>
      <div className="m-auto flex w-full flex-wrap items-center justify-center gap-12 py-12 lg:gap-16">
        {products?.map((item: any) => {
          return (
            <div
              className="grid gap-4 overflow-hidden rounded pb-4 shadow-xl"
              key={item.id}
            >
              <img
                src={item.src}
                alt="product"
                loading="lazy"
                className="ease md:h-68 w-full cursor-pointer object-cover transition-all duration-200 hover:scale-110 md:w-72"
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
                  className="mx-2 text-xs"
                  color="blue"
                  pill
                  onClick={() => dispatch({ type: "add", item: item })}
                >
                  {t("cart.add")}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Collection;
