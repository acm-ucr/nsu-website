import "./globals.css";
import { Urbanist } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "UCR Nikkei Student Union",
  description: "A website for the Nikkei Student Union at UC Riverside",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
