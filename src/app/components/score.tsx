export default function Score() {
  const title = "ROCK PAPER SCISSORS";
  const score = 12;
  return (
    <div className="flex w-3/4 max-w-[900px] items-center justify-between rounded-md border-2 border-neutral-100 border-opacity-30 p-3">
      <div className="pl-3 sm:pl-10">
        {/*Split each word from title to get title with break lines*/}
        {title.split(" ").map((word, k) => (
          <div
            key={k}
            className="text-[1.5rem] font-bold leading-none text-neutral-100 sm:text-[1.875rem]"
          >
            {word}
          </div>
        ))}
      </div>
      <div className="flex h-32 w-32 flex-col items-center justify-center rounded-md bg-neutral-100 sm:w-40">
        <div>
          <h2 className="font-bold text-blue-900">SCORE</h2>
        </div>
        <div>
          <p className="text-6xl font-extrabold text-neutral-700 sm:text-7xl">
            {score}
          </p>
        </div>
      </div>
    </div>
  );
}
