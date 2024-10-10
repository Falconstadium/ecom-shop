import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CartContextProvider from "./context/CartContext.tsx";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import I18NextHttpBackend from "i18next-http-backend";
import enTranslation from "../src/locales/en/translation.json";
import frTranslation from "../src/locales/fr/translation.json";

const resources = {
  en: {
    global: enTranslation,
  },
  fr: {
    global: frTranslation,
  },
};

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "htmlTag",
        "querystring",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "../src/locales/{{lng}}/translation.json",
    },
  });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </I18nextProvider>
  </StrictMode>,
);
