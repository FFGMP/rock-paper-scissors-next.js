export default function SkeletonCircleBattle() {
  return (
    <div
      className={
        " flex h-40 w-40 items-center justify-center justify-self-center rounded-full sm:h-64 sm:w-64 "
      }
    >
      <div
        className={
          "flex h-32 w-32 animate-pulse items-center justify-center rounded-full bg-black opacity-30 sm:h-52 sm:w-52"
        }
      ></div>
    </div>
  );
}
