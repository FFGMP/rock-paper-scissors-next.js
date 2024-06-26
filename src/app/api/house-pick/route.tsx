import { responseType } from "@/app/types/types";
import { gameOptions } from "@/app/utils/gameOptions";

export async function POST(req: Request) {
  // Initialize the result variable
  // 1 = house wins, 2 = player wins, 3 = tie
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
    result = 3;
  }

  // Check if the house wins or the player wins
  if (outcomes[housePickName].winsAgainst === playerPick?.name) {
    result = 1;
  } else if (outcomes[housePickName].losesAgainst === playerPick?.name) {
    result = 2;
  }

  // Return the house's choice, the player's choice, and the result
  const response: responseType = {
    housePickName: housePickName,
    playerPick: playerPick?.name,
    result: result,
  };

  //Debug purposes
  /*
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Response(JSON.stringify(response)));
    }, 300);
  });
*/

  return new Response(JSON.stringify(response));
}
