import createMiddleware from "next-intl/middleware";
import {
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
} from "$/i18n/navigation";

export default createMiddleware({
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!_next|.*\\..*).*)"],
};
