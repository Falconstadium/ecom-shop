import { TextInput } from "flowbite-react";
import { useTranslation } from "react-i18next";

const EmailForm = () => {
  const { t } = useTranslation("global");

  return (
    <form className="container mt-16 grid place-content-center place-items-center gap-3">
      <h2 className="text-xl font-semibold capitalize">
        {t("subscribe.title")}
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        <TextInput
          id="email1"
          type="email"
          placeholder={t("contact.placeholder")}
          className="w-full lg:w-[500px]"
          required
        />
        <button className="rounded bg-rose px-4 py-2 text-xs font-medium uppercase tracking-wide text-light transition-colors duration-300 ease-in-out hover:bg-pink-600 lg:text-sm">
          {t("subscribe.btn")}
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
