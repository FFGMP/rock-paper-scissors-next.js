"use client";

import OptionCircleBattle from "./components/optionCircleBattle";
import HousePick from "./components/housePick";
import { gameOptions } from "@/app/utils/gameOptions";
import { useEffect, useState } from "react";
import OutcomeDisplay from "./components/outcomeDisplay";

export default function Game({
  params: { battleOption },
}: {
  params: { battleOption: string };
}) {
  const [result, setResult] = useState<number | null>(null);

  // Find the player choice from the game options array
  const playerChoice = gameOptions.find(
    (option) => option.name === battleOption,
  );

  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-center text-center sm:mt-20 sm:px-0 lg:gap-x-20">
      <div className="flex w-2/4 flex-col-reverse items-center sm:flex-col lg:w-fit">
        <h1 className="text-base font-bold tracking-wide sm:text-lg">
          YOU PICKED
        </h1>
        <div>
          {playerChoice && <OptionCircleBattle placeholder={playerChoice} />}
        </div>
      </div>
      <div className="order-3 mt-11 flex h-[78px] w-full justify-center px-2 sm:h-fit sm:w-fit lg:order-2 lg:mt-0">
        <OutcomeDisplay result={result} />
      </div>
      <div className="order-2 flex w-2/4 flex-col-reverse items-center sm:flex-col lg:order-3 lg:w-fit">
        <h1 className="text-base font-bold tracking-wide sm:text-lg">
          THE HOUSE PICKED
        </h1>
        <div className="">
          <HousePick setResult={setResult} battleOption={battleOption} />
        </div>
      </div>
    </div>
  );
}
