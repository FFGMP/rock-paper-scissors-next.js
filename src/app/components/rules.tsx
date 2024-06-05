"use client";

import { useState } from "react";
import RulesModal from "./rulesModal";

export default function Rules() {
  const [rules, setRules] = useState(false);
  return (
    <>
      <button
        onClick={(e) => {
          setRules(!rules);
        }}
        className="relative mt-9 flex h-11 w-32 items-center justify-center rounded-lg border-2 border-neutral-50 border-opacity-30 hover:bg-neutral-600 hover:bg-opacity-10 sm:mb-7 sm:mr-7 sm:mt-0"
      >
        <p className="font-bold">Rules</p>
      </button>
      {rules ? <RulesModal setRules={setRules} /> : ""}
    </>
  );
}
