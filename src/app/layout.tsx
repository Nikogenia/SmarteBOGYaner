import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Waves from "@/components/waves";

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin']});

export const metadata: Metadata = {
  title: "Smarte BOGYaner",
  description: "Ein Projektseminar am Bodensee-Gymnasium Lindau",
  icons: ['/bogy.webp'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={poppins.className}>
        <main className="w-full min-h-screen relative grid">
          {children}
          <Waves />
        </main>
      </body>
    </html>
  );
}
