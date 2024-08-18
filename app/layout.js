import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog & Portfolio",
  description: "Place i showcase what are in my mind and my projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-[#EFEDE6] px-4 relative" >{children}</body>
    </html>
  );
}
