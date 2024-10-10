import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

const Contact = () => {
  const { t } = useTranslation("global");

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_ID}`,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(t("contact.success_toast"));
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(t("contact.error_toast"));
        },
      );
  };

  return (
    <>
      <Button className="fixed left-4 top-4 lg:left-12" color="light" size="sm">
        <Link to={"/"} className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          {t("cart.back")}
        </Link>
      </Button>
      <form
        className="container mx-auto flex min-h-dvh w-full flex-col justify-center gap-4 px-4 md:max-w-md"
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <div className="block">
            <Label htmlFor="name" value={t("contact.name")} />
          </div>
          <TextInput id="name" type="name" name="username" required shadow />
        </div>
        <div>
          <div className="block">
            <Label htmlFor="email2" value={t("contact.email")} />
          </div>
          <TextInput
            id="email2"
            type="text"
            name="email"
            placeholder={t("contact.placeholder")}
            required
            shadow
          />
        </div>
        <div>
          <div className="block">
            <Label htmlFor="country" value={t("contact.country")} />
          </div>
          <TextInput
            id="country"
            type="text"
            name="country"
            placeholder={t("contact.country_place")}
            required
            shadow
          />
        </div>
        <div className="max-w-md">
          <div className="block">
            <Label htmlFor="comment" value={t("contact.message")} />
          </div>
          <Textarea
            id="comment"
            name="message"
            placeholder={t("contact.textarea")}
            required
            rows={3}
          />
        </div>
        <Toaster richColors />
        <Button type="submit" color="blue" className="uppercase" size="sm">
          {t("contact.submit")}
        </Button>
      </form>
    </>
  );
};

export default Contact;
