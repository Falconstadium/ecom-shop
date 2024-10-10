import { createFileRoute, Link } from "@tanstack/react-router";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/user")({
  component: () => {
    const { t } = useTranslation("global");

    const [show, setShow] = useState(true);

    const hideForm = () => {
      setShow(!show);
    };

    return (
      <main className="container mx-auto grid min-h-dvh w-full place-items-center">
        <form
          className={`${show ? "hidden" : "flex"} w-full flex-col gap-4 px-4 transition-all duration-300 ease-in-out lg:max-w-md`}
        >
          <div className="grid place-items-center gap-2">
            <h2 className="text-center text-3xl font-semibold">
              {t("user.signin")}
            </h2>
            <div className="h-[1px] w-12 rounded-sm bg-slate-600"></div>
          </div>
          <div>
            <div className="block">
              <Label htmlFor="email1" value={t("user.email")} />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder={t("contact.placeholder")}
              required
            />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="password1" value={t("user.pass")} />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">{t("user.remember")}</Label>
          </div>
          <Button color="dark" size="sm" type="submit">
            {t("contact.submit")}
          </Button>

          <div className="mt-4 flex items-center gap-2">
            <p className="text-sm font-medium"> {t("user.account")}</p>
            <span
              className="cursor-pointer font-semibold underline"
              onClick={hideForm}
            >
              {t("user.signup")}
            </span>
          </div>
        </form>

        <form
          className={`${show ? "flex" : "hidden"} w-full flex-col gap-4 px-4 transition-all duration-300 ease-in-out lg:max-w-md`}
        >
          <div className="grid place-items-center gap-2">
            <h2 className="text-center text-3xl font-semibold">
              {t("user.create")}
            </h2>
            <div className="h-[1px] w-12 rounded-sm bg-slate-600"></div>
          </div>
          <div>
            <div className="block">
              <Label htmlFor="email2" value={t("user.email")} />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder={t("contact.placeholder")}
              required
              shadow
            />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="password2" value={t("user.pass")} />
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="repeat-password" value={t("user.repeat")} />
            </div>
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              {t("user.terms")}&nbsp;
              <Link
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                {t("user.condition")}
              </Link>
            </Label>
          </div>
          <Button color="dark" size="sm" type="submit">
            {t("user.register_btn")}
          </Button>

          <div className="mt-4 flex items-center gap-2">
            <p className="text-sm font-medium">{t("user.already")}</p>
            <span
              className="cursor-pointer font-semibold underline"
              onClick={hideForm}
            >
              {t("user.signin")}
            </span>
          </div>
        </form>
      </main>
    );
  },
});
