import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import "./globals.css";

const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clerk Authentication Demo",
  description: "Created for the purpose of learning clerk authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ubuntu.className}>
          <Navbar />
          <main
            style={{ minHeight: "calc(100vh - 70px)" }}
            className="flex flex-col justify-center items-center"
          >
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
