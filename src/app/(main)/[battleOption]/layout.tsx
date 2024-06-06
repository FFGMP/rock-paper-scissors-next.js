import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { battleOption: "rock" },
    { battleOption: "paper" },
    { battleOption: "scissors" },
  ];
}

export default async function BattleLayout({
  children,
  params: { battleOption },
}: {
  children: React.ReactNode;
  params: { battleOption: string };
}) {
  const arrayWithBattleOptions = await generateStaticParams();
  // Check if the battleOption is valid
  arrayWithBattleOptions.some((option) => option.battleOption === battleOption)
    ? null
    : notFound();
  return <>{children}</>;
}
