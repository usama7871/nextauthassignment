import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";
import Header from "./component/Headers";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth Starter",
  description: "Professional authentication app with GitHub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col h-full`}>
        <SessionWrapper>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
