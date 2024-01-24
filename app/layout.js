import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My first Next App",
  description: "Made by Sahil Thakur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
