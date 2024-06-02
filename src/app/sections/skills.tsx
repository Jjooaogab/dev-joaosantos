import { Braces, Cat, CodeXml, CrossIcon, GitGraphIcon, LeafIcon, RedoDotIcon, WindIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Skills from "../components/skills";

export default function Skill() {

  const t = useTranslations("Skills")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-900">
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
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-4">
          <Skills icon={CodeXml} skill="HTML" />
          <Skills icon={CrossIcon} skill="CSS" />
          <Skills icon={Braces} skill="JavaScript" />
          <Skills icon={RedoDotIcon} skill="React" />
          <Skills icon={WindIcon} skill="Tailwind CSS" />
          <Skills icon={LeafIcon} skill="Node.js" />
          <Skills icon={Cat} skill="Nest.js" />
          <Skills icon={GitGraphIcon} skill="Git" />
        </div>
      </div>
    </section>
  );
}
