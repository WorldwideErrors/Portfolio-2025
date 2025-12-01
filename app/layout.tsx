import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: 'Jeffree | %s',
    default: 'Home',
  },
  description: "Portfolio website of Jeffrey van Tillo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        {children}
      </body>
    </html>
  );
}
