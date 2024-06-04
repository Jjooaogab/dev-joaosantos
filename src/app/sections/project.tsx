/* eslint-disable react/no-unescaped-entities */
import { useTranslations } from "next-intl";
import { CardProject } from "../components/card-projects";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-200 dark:bg-slate-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("title")}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <CardProject
            description="Projeto feito em NextJS, juntamente com TailwindCSS para fortalecer as bases."
            project="ToDo List"
            link="https://to-do-list-dev-jjooaogab.vercel.app/"
            cta={t("cta")}
            href="todolist.png"
          />
          <CardProject
            description="Projeto feito em NextJS, juntamente com TailwindCSS para um salão de cabelo."
            project="Slay"
            link="https://slay-livid.vercel.app/"
            cta={t("cta")}
            href="slay.png"
          />
          <CardProject
            description="Projeto feito para aprender mais sobre TailwindCSS, recriando a UI do Deezer. Only PC"
            project="UI Deezer"
            link="https://deezer-jjoaogab-web.vercel.app/home"
            cta={t("cta")}
            href="deezer.png"
          />
        </div>
      </div>
    </section>
  );
}
