import { gameOptions } from "../page";
import OptionCircleBattle from "./components/optionCircleBattle";
import HousePick from "./components/housePick";

export default function Game({
  params: { battleOption },
}: {
  params: { battleOption: string };
}) {
  // Find the player choice from the game options array
  const playerChoice = gameOptions.find(
    (option) => option.name === battleOption,
  );
  return (
    <div className="grid w-full grid-cols-2 place-items-center gap-5 px-2 text-center sm:mt-20 sm:gap-12 sm:px-0">
      <div className="order-3 sm:order-1">
        <h1 className="text-base font-bold tracking-wide sm:text-lg">
          YOU PICKED
        </h1>
      </div>
      <div className="order-4 sm:order-2">
        <h1 className="text-base font-bold tracking-wide sm:text-lg">
          THE HOUSE PICKED
        </h1>
      </div>
      <div className="order-1 sm:order-3">
        {playerChoice && <OptionCircleBattle placeholder={playerChoice} />}
      </div>
      <div className="order-2 sm:order-4">
        <HousePick />
      </div>
    </div>
  );
}
