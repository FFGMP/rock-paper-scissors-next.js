import Score from "../components/score";
import Rules from "../components/rules";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex h-full w-full items-center justify-center">
        <div
          className={
            " flex min-h-screen w-full max-w-[1340px] flex-col items-center justify-center sm:w-fit"
          }
        >
          <Score />
          {children}
          <div className="bottom-0 right-0 sm:absolute">
            {/* Rules button. need to see what can i change to make this in a better way */}
            <Rules />
          </div>
        </div>
      </body>
    </html>
  );
}
