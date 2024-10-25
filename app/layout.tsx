import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const circularSTD = localFont({
  src: "./fonts/circular-std-medium-500.ttf",
  variable: "--font-circular-std",
  weight: "500",
});
const Recoleta = localFont({
  src: "./fonts/Recoleta.otf",
  variable: "--font-recoleta",
  weight: "400 600 700",
});
export const metadata: Metadata = {
  title: "Dutiful",
  description: "Dutiful is a free and open-source SaaS platform for freelancers and businesses to manage their projects and clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${circularSTD.variable} ${Recoleta.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
