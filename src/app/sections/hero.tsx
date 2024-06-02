'use client'

/* eslint-disable react/no-unescaped-entities */
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {

  const t = useTranslations("Hero")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {t("title")}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              {t("description")}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="https://github.com/Jjooaogab"
                target="_blank"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                {t("cta")}
              </a>
            </div>
          </div>
          <Image
          src="https://cdn.discordapp.com/attachments/1229466807082156043/1246636170771693598/Group_1.png?ex=665d1be8&is=665bca68&hm=dda4d00903ae989704c5243116f41e9160f4a8ef718dc08133f669edb1d76b49&"
          width="400"
          height="400"
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
        </div>
      </div>
    </section>
  );
}
