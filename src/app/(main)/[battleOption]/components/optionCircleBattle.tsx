import { placeHolderCircle } from "../../../types/types";
import Image from "next/image";

export default function OptionCircleBattle({
  placeholder,
}: {
  placeholder: placeHolderCircle;
}) {
  return (
    <div
      className={
        " flex h-40 w-40 items-center justify-center justify-self-center rounded-full shadow-[inset_0px_-8px_0px_0px_rgba(0,0,0,0.35)] sm:h-64 sm:w-64 "
      }
      style={{ backgroundColor: placeholder.color }}
    >
      <div
        className={
          "flex h-32 w-32 items-center justify-center rounded-full bg-neutral-300 shadow-[inset_0px_8px_0px_0px_rgba(115,115,115,0.7)] sm:h-52 sm:w-52"
        }
      >
        <Image
          className="h-12 w-12 sm:h-24 sm:w-24"
          width={55}
          height={55}
          src={placeholder.icon}
          alt={placeholder.name}
        />
      </div>
    </div>
  );
}
