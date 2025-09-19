import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fiza — Nutritionist & Dietitian",
  description:
    "Professional nutrition and diet consultation services by Fiza. Expert guidance for healthy living, personalized diet plans, and wellness coaching.",
  keywords:
    "nutritionist, dietitian, healthy eating, diet plans, wellness, nutrition consultation",
  authors: [{ name: "Fiza" }],
  openGraph: {
    title: "Fiza — Nutritionist & Dietitian",
    description: "Professional nutrition and diet consultation services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
