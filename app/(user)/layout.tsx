import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Fragrance Aficionado",
  description: "A super fast blog with live preview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto max-w-7xl`}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
