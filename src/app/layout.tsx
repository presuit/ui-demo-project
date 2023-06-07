import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import GNBLink from "@/components/GNB/GNBLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI-Demo",
  description: "Create Interactive UI and Effect!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-zinc-100`}>
        <header>
          <ul className="p-3 px-5 font-medium flex items-center gap-5">
            <GNBLink href="/" title="Home" />
            <GNBLink href="/test/stripe-box" title="Stripe Box" />
            <GNBLink href="/test/animate-tab" title="Animate Tab" />
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
