import { getMessages, getTimeZone } from "next-intl/server";
import { IBM_Plex_Sans, Libre_Franklin } from "next/font/google";
import { notFound } from "next/navigation";
import { Providers } from "../../providers";
import "./globals.css";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-libre_franklin",
});
const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm_plex_sans",
});

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locale.includes(locale)) notFound();

  const messages = await getMessages();
  const timezone = await getTimeZone();

  return (
    <html lang="en">
      <head>
        <title>Santos Portfolio</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={libre_franklin.variable + " " + ibm_plex_sans.variable}>
        <Providers locale={locale} messages={messages} timezone={timezone}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
