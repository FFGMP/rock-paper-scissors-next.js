import { gameOptions } from "@/app/(main)/page";

export async function POST(req: Request) {
  // Initialize the result variable
  // 0 = house wins, 1 = player wins, 2 = tie
  let result;
  // Get the player's choice from the request body
  const body = await req.json();
  const playerPick = gameOptions.find(
    (option) => option.name === body.battleOption,
  );

  // Get the house's choice
  const housePick = Math.floor(Math.random() * 3);
  const housePickName = gameOptions[housePick].name;

  // Define the outcomes for each option
  const outcomes: {
    [key: string]: { winsAgainst: string; losesAgainst: string };
  } = {
    rock: { winsAgainst: "scissors", losesAgainst: "paper" },
    paper: { winsAgainst: "rock", losesAgainst: "scissors" },
    scissors: { winsAgainst: "paper", losesAgainst: "rock" },
  };

  // Compare the player's choice with the house's choice to detect a tie
  if (housePickName === playerPick?.name) {
    result = 2;
  }

  // Check if the house wins or the player wins
  if (outcomes[housePickName].winsAgainst === playerPick?.name) {
    result = 0;
  } else if (outcomes[housePickName].losesAgainst === playerPick?.name) {
    result = 1;
  }

  // Return the house's choice, the player's choice, and the result
  const response: responseType = {
    housePickName: housePickName,
    playerPick: playerPick?.name,
    result: result,
  };

  return new Response(JSON.stringify(response));
}

export type responseType = {
  playerPick?: string;
  housePickName: string;
  result?: number;
};
