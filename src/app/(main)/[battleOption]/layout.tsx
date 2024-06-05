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
  const Array = await generateStaticParams();
  Array.forEach((v) => {
    console.log(v.battleOption);
  });
  return (
    <>
      <h1>{battleOption}</h1>
      {children}
    </>
  );
}
