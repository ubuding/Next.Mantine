import Head from "next/head";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { getMessages } from "next-intl/server";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import { theme } from "$/style";
const inter = Inter({ subsets: ["latin"] });

export const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Notifications position="top-right" />
          <NavigationProgress />
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
};
