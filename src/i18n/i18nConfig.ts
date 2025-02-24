// dayjs locales must be imported as well, list: https://github.com/iamkun/dayjs/tree/dev/src/locale
import "dayjs/locale/es";
import "dayjs/locale/fi";
import "dayjs/locale/it";
import "dayjs/locale/pt-br";
import "dayjs/locale/sv";
import "dayjs/locale/zh-cn";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import our translations
import en from "~/i18n/locales/en/translation.json";
import es from "~/i18n/locales/es/translation.json";
import fi from "~/i18n/locales/fi/translation.json";
import it from "~/i18n/locales/it/translation.json";
import pt_BR from "~/i18n/locales/pt_BR/translation.json";
import sv from "~/i18n/locales/sv/translation.json";
import zh_Hans from "~/i18n/locales/zh_Hans/translation.json";

export const defaultNS = "translation";
// needs to be aligned with `supportedLocales`
export const resources = {
  en: {
    translation: en.translation,
    common: en.common,
    components: en.components,
    permissions: en.permissions,
  },
  es: {
    translation: es.translation,
    common: es.common,
    components: es.components,
    permissions: es.permissions,
  },
  fi: {
    translation: fi.translation,
    common: fi.common,
    components: fi.components,
    permissions: fi.permissions,
  },
  it: {
    translation: it.translation,
    common: it.common,
    components: it.components,
    permissions: it.permissions,
  },
  "pt-BR": {
    translation: pt_BR.translation,
    common: pt_BR.common,
    components: pt_BR.components,
    permissions: pt_BR.permissions,
  },
  sv: {
    translation: sv.translation,
    common: sv.common,
    components: sv.components,
    permissions: sv.permissions,
  },
  "zh-CN": {
    translation: zh_Hans.translation,
    common: zh_Hans.common,
    components: zh_Hans.components,
    permissions: zh_Hans.permissions,
  },
} as const;

// needs to be aligned with `resources`
export const supportedLocales = [
  { locale: "en", label: "English" },
  { locale: "es", label: "Español" },
  { locale: "fi", label: "Finnish" },
  { locale: "it", label: "Italiano" },
  { locale: "pt-BR", label: "Português (Brasil)" },
  { locale: "sv", label: "Svenska" },
  { locale: "zh-CN", label: "中文（简化字）" },
];

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    //debug: true,
    fallbackLng: "en",
    ns: ["translation", "common", "components", "permissions"],
    defaultNS,
    resources,
  });

export default i18n;
