import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Todo App",
  description: "Vercel and Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] ${roboto.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
