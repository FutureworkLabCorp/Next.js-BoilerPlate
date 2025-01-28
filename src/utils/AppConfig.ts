import type { LocalePrefixMode } from "next-intl/routing";

const localePrefix: LocalePrefixMode = "as-needed";

export const AppConfig = {
  name: "Nextjs BoilerPlate",
  locales: ["en"],
  defaultLocale: "en",
  localePrefix,
};
