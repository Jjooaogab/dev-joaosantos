"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

export function Providers({ children, locale, messages, timezone }: { children: React.ReactNode; locale: string; messages: AbstractIntlMessages; timezone: string }) {


  return (
    <NextIntlClientProvider 
    locale={locale}
    messages={messages}
    timeZone={timezone}
    >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
