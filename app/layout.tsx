import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";
import Header from "./component/Headers";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth Starter",
  description: "A professional authentication app with GitHub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  );
}
