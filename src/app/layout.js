import { Inter } from "next/font/google";
import "./globals.scss";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Potions Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <Logo />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
