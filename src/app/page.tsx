import OptionCircle from "./components/optionCircle";
import { placeHolderCircle } from "./types/types";

export default function Home() {
  const gameOptions: Array<placeHolderCircle> = [
    { name: "Paper", icon: "icon-paper.svg", color: "blue" },
    { name: "Scissors", icon: "icon-scissors.svg", color: "yellow" },
    { name: "Rock", icon: "icon-rock.svg", color: "red" },
  ];

  return (
    <main>
      <div className="mt-20 grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-7">
        {/*<OptionCircle placeholder={{ icon: "String", color: "string" }} />*/}
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
      </div>
    </main>
  );
}
