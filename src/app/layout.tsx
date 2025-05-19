// /app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0b081b] text-white font-poppins scroll-smooth">
        {children}
      </body>
    </html>
  );
}
