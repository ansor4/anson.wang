import { Space_Grotesk } from "next/font/google";
import cn from "classnames";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <section className={cn(space_grotesk.className, "flex-col md:flex-col flex items-left md:justify-between mt-16 mb-16 md:mb-12")}>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          Hi ya! 👋
        </h1>
        <h3 className="text-5xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
          I'm Anson.
        </h3>
      </section>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        I'm a software engineer based in SF at the moment, and this is my personal site.
      </h4>
    </section >
  );
}
