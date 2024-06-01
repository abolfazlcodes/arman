import Image from "next/image";
import { firaCode } from "./fonts";
import ToolbarLinks from "@/components/Navigation/ToolbarLinks";

export default function Home() {
  return (
    <main className="sm:pt-14.5 min-h-svh pt-4">
      <section className="relative flex h-full w-full flex-col items-center gap-x-14 md:flex-row">
        <article className="order-2 flex flex-1 flex-col gap-y-4 px-4 py-10 md:order-1">
          <div className="w-21 rounded-5 hidden h-1 min-h-1 bg-[#7127BA] md:block"></div>

          <div
            className={`text-xl md:text-title1 ${firaCode.className} font-bold`}
          >
            <h1>Arman</h1>
            <h2 className="text-caption1 text-primary md:text-3xl">
              Back-end Engineer
            </h2>
          </div>

          <p className="text-body2 text-text-primary md:text-body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Egestas purus viverra accumsan
          </p>
        </article>

        <figure className="rounded-20 shadow-heroImage2 h-[340px] w-[300px] rotate-6 overflow-hidden transition-all duration-100 ease-linear hover:-rotate-2 sm:h-[370px] sm:w-[330px] md:order-2 md:h-[400px] md:w-[360px]">
          <Image
            src={"/images/avatar.webp"}
            alt="hero images"
            fill
            className="h-full w-full object-cover object-center"
            quality={100}
            priority
          />
        </figure>

        <ToolbarLinks />
      </section>
    </main>
  );
}
