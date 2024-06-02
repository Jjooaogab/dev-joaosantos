import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface CardProps {
  project: string
  description: string
  link: string,
  cta: string,
  href: string
}

export const CardProject = ({ description, link="#", project, cta, href}: CardProps) => {
  return (
    <Card>
      <CardContent className="flex aspect-video items-center justify-center p-6">
        <Image
        src={"/" + href}
        width="300"
        height="200"
        alt="Project 1"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
      />
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between gap-8">
          <div>
            <h3 className="text-lg font-bold">{project}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          <a
            href={link}
            target="_blank"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            {cta}
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};
