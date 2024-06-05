"use client";

import Image from "next/image";

function RulesModalMobile({ setRules }: { setRules: Function }) {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center overflow-auto bg-white sm:left-2/4 sm:top-2/4 sm:hidden sm:h-[26rem] sm:w-[26rem] sm:-translate-x-2/4 sm:-translate-y-2/4 sm:rounded-md">
      <div className="flex h-5/6 w-full flex-col items-center justify-between sm:h-full sm:flex-row sm:items-start sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-black">RULES</h1>
        <Image
          src="/image-rules.svg"
          alt="rules"
          className="sm:hidden"
          width={300}
          height={300}
        />
        <button onClick={() => setRules(false)}>
          <Image src="icon-close.svg" alt="close" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}

function RulesModalDesktop({ setRules }: { setRules: Function }) {
  return (
    <>
      <div className="fixed left-0 top-0 hidden h-full w-full bg-black opacity-35 sm:block"></div>
      <div className="fixed left-2/4 top-2/4 -flex hidden h-96 w-96 -translate-x-2/4 -translate-y-2/4 flex-col rounded-md bg-white p-6 sm:block">
        <div className="left-0 top-0 flex flex-row items-start justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-black">
            RULES
          </h1>
          <button onClick={() => setRules(false)}>
            <Image src="icon-close.svg" alt="close" width={20} height={20} />
          </button>
        </div>
        <div className="flex h-full items-center justify-center">
          <Image src="/image-rules.svg" alt="rules" width={300} height={300} />
        </div>
      </div>
    </>
  );
}

export default function RulesModal({ setRules }: { setRules: Function }) {
  return (
    <>
      <RulesModalMobile setRules={setRules} />
      <RulesModalDesktop setRules={setRules} />
    </>
  );
}
