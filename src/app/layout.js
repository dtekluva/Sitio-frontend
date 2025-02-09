import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Sitio",
  description: "Sitio Website",
};

export default function RootLayout({ children }) {
  return (
    // Ensure no extra space between the <html> and <body> tags
    <html lang="en">
      <body className={outfit.className}>
        <main className="max-w-full mx-auto  h-full">{children}</main>
      </body>
    </html>
  );
}