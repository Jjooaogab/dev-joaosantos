import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-gray-800">
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
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col space-y-4">
              {/* <div className="space-y-1">
                <Label htmlFor="name">{t("formName")}</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">{t("formMessage")}</Label>
                <Textarea id="message" required />
              </div> */}
              <Button type="submit" className="w-full">
                <a href="https://www.instagram.com/dev.jjooao/" target="_blank">{t("button")}</a>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
