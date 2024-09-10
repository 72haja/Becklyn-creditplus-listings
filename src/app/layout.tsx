import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakob - Becklyn",
  description: "Coding Aufgabe im Bewerbungsprozess",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
