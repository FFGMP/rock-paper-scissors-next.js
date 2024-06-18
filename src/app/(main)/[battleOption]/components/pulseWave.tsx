export default function PulseWave({
  result,
  playerPick,
}: {
  result: number | null;
  playerPick: boolean;
}) {
  const isWinner = playerPick ? result === 2 : result === 1;

  return (
    <div
      className={
        "absolute top-0 h-full w-full animate-pulse rounded-full transition-all delay-75 duration-150" +
        ((result && isWinner) || (!playerPick && isWinner)
          ? " opacity-100 shadow-[0_0px_0px_25px_rgba(255,255,255,0.03)]"
          : " opacity-0")
      }
    >
      <div
        className={
          "absolute top-0 h-full w-full animate-pulse rounded-full transition-all delay-100 duration-150 " +
          ((result && isWinner) || (!playerPick && isWinner)
            ? " opacity-100 shadow-[0_0px_0px_60px_rgba(255,255,255,0.03)]"
            : " opacity-0")
        }
      >
        <div
          className={
            "absolute top-0 h-full w-full animate-pulse rounded-full transition-all delay-150 duration-150" +
            ((result && isWinner) || (!playerPick && isWinner)
              ? " opacity-100 shadow-[0_0px_0px_90px_rgba(255,255,255,0.03)]"
              : " opacity-0")
          }
        ></div>
      </div>
    </div>
  );
}
