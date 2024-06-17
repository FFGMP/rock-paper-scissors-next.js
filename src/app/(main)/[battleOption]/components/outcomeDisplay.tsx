import Link from "next/link";

export default function OutcomeDisplay({ result }: { result: number | null }) {
  let message: string = "";
  switch (result) {
    case 1:
      message = "YOU LOSE";
      break;
    case 2:
      message = "YOU WIN";
      break;
    case 3:
      message = "IT'S A TIE";
      break;
    default:
      message = "";
      break;
  }

  return (
    <div
      className={
        " flex flex-col transition-all delay-300 duration-500 " +
        (message ? "opacity-100 lg:w-48" : "opacity-0 lg:w-0 lg:opacity-100")
      }
    >
      <div
        className={
          "transform overflow-hidden whitespace-nowrap text-center transition-opacity lg:delay-700 lg:duration-75 lg:ease-in-out " +
          (message ? " opacity-100" : " opacity-0")
        }
      >
        <h1 className={"text-xl font-extrabold sm:text-3xl "}>{message}</h1>
        <Link href={"/"}>
          <button
            className={
              "mt-2 w-72 rounded-md border bg-neutral-50 p-2 font-bold text-black hover:text-red-400 sm:w-48"
            }
            disabled={!message}
            hidden={!message}
          >
            PLAY AGAIN
          </button>
        </Link>
      </div>
    </div>
  );
}
