import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import type { Pathnames } from "next-intl/navigation";

export const defaultLocale = "en";
export const locales = ["en", "zh"] as const;
export const localePrefix = "as-needed";
export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/ubuding": "/ubuding",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
