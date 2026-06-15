import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PUKUPIG | Seasonal Home Decor",
  description: "Seasonal home decor for cozy North American homes.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
  );
}