import Image from "next/image";
import { placeHolderCircle } from "../types/types";

export default function OptionCircle({
  placeholder,
  classname,
}: {
  placeholder: placeHolderCircle;
  classname?: string;
}) {
  return (
    <div
      className={
        " flex h-40 w-40 items-center justify-center justify-self-center rounded-full shadow-[inset_0px_-8px_0px_0px_rgba(0,0,0,0.35)] sm:h-52 sm:w-52 " +
        classname
      }
      style={{ backgroundColor: placeholder.color }}
    >
      <div
        className={
          "flex h-32 w-32 items-center justify-center rounded-full bg-neutral-300 shadow-[inset_0px_8px_0px_0px_rgba(115,115,115,0.7)] sm:h-40 sm:w-40"
        }
      >
        <Image
          className="h-12 w-12 sm:h-20 sm:w-20"
          width={55}
          height={55}
          src={placeholder.icon}
          alt={placeholder.name}
        />
      </div>
    </div>
  );
}
