import OptionCircle from "../components/optionCircle";
import { gameOptions } from "@/app/utils/gameOptions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-fit">
      <div className="relative mt-9 grid w-full grid-cols-2 grid-rows-2 gap-x-12 sm:mt-20 sm:gap-x-16 sm:gap-y-7">
        {gameOptions.map((v, k) => {
          return (
            <OptionCircle
              key={k}
              placeholder={{ name: v.name, icon: v.icon, color: v.color }}
              classname={
                k === gameOptions.length - 1
                  ? "col-span-2 justify-self-center"
                  : ""
              }
            />
          );
        })}
        <div className="absolute -z-10 flex h-full w-full items-center justify-center">
          <Image
            className="h-4/6 w-4/6"
            width={55}
            height={55}
            src={"bg-triangle.svg"}
            alt={"Triangle background"}
          />
        </div>
      </div>
    </main>
  );
}
