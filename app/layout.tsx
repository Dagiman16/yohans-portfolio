import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abrham Demse | Gold Medalist Management Graduate",
  description:
    "Top-performing Management Graduate from Woldia University. GPA 3.89, Exit Exam 88%, Gold Medal Award. Seeking NGO, Banking, Admin, and HR opportunities.",
  keywords: "Abrham Demse, management graduate, Woldia University, gold medal, NGO jobs, bank jobs, Ethiopia",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23F5C518'/><text y='.9em' font-size='70' font-family='Arial Black,sans-serif' font-weight='900' x='50%' text-anchor='middle' dominant-baseline='hanging' fill='%231a1a1a'>A</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FAFAFA] text-[#1a1a1a] overflow-x-hidden">{children}</body>
    </html>
  );
}
