import type { TemplateConfig } from "./configType";
import en from "./configs/en";
import fr from "./configs/fr";
import ar from "./configs/ar";

export const getTemplateConfig = (lang: string = "en"): TemplateConfig => {
  let config: TemplateConfig;
  switch (lang) {
    case "fr":
      config = { ...fr, locale: "fr" };
      break;
    case "ar":
      config = { ...ar, locale: "ar" };
      break;
    default:
      config = { ...en, locale: "en" };
      break;
  }

  config.appStoreLink = import.meta.env.PUBLIC_APP_STORE_URL;
  config.googlePlayLink = import.meta.env.PUBLIC_GOOGLE_PLAY_URL;

  return config;
};

const defaultTemplateConfig = en;
export default defaultTemplateConfig;
