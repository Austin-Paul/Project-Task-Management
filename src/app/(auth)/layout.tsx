import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh">
        <GlassPane className="h-full w-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
