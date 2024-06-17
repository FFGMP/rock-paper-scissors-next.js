import Score from "../components/score";
import Rules from "../components/rules";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        " flex min-h-screen w-full max-w-[1340px] flex-col items-center justify-between py-10 sm:justify-start sm:pt-20"
      }
    >
      <Score />
      {children}
      <div className="bottom-0 right-0 sm:absolute">
        {/* Rules button. need to see what can i change to make this in a better way */}
        <Rules />
      </div>
    </div>
  );
}
