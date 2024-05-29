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
        "flex h-56 w-56 items-center justify-center rounded-full border-[25px] bg-neutral-300 " +
        classname +
        " border-" +
        placeholder.color +
        "-700"
      }
    >
      <Image
        width={55}
        height={55}
        src={placeholder.icon}
        alt={placeholder.name}
      />
    </div>
  );
}
