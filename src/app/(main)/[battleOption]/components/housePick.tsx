"use client";
import OptionCircleBattle from "./optionCircleBattle";
import { useQuery } from "@tanstack/react-query";
import { responseType } from "@/app/types/types";
import { gameOptions } from "@/app/utils/gameOptions";
import { useStoreGameValues } from "@/app/store/storeGameValues";
import { useEffect } from "react";
import SkeletonCircleBattle from "./skeletonCircleBattle";

// Function to manage the score
function manageScore(
  result: number,
  reducePlayerScore: Function,
  increasePlayerScore: Function,
) {
  switch (result) {
    case 1:
      reducePlayerScore();
      break;
    case 2:
      increasePlayerScore();
      break;
    default:
      break;
  }
}

export default function HousePick({
  battleOption,
  setResult,
}: {
  battleOption: string;
  setResult: Function;
}) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["housePick"],
    queryFn: () =>
      fetch("/api/house-pick", {
        method: "POST",
        body: JSON.stringify({ battleOption: battleOption }),
      }).then((res) => res.json() as Promise<responseType>),
    refetchOnWindowFocus: false,
    gcTime: 0,
  });

  // Get the functions from the store
  const reducePlayerScore = useStoreGameValues(
    (state) => state.reducePlayerScore,
  );
  const increasePlayerScore = useStoreGameValues(
    (state) => state.increasePlayerScore,
  );

  // Call the manageScore function when the data is available
  useEffect(() => {
    if (data?.result) {
      manageScore(data.result, reducePlayerScore, increasePlayerScore);
      setResult(data.result);
    }
  }, [data, increasePlayerScore, reducePlayerScore, setResult]);

  if (isLoading) return <SkeletonCircleBattle />;
  if (error || !data?.housePickName) return <p>Error</p>;

  const playerChoice = gameOptions.find(
    (option) => option.name === data.housePickName,
  );

  return (
    <>{playerChoice && <OptionCircleBattle placeholder={playerChoice} />}</>
  );
}
