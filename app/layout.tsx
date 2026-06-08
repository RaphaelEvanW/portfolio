import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio 2026 - Raphael Evan Wijayanto",
  description: "Personal portfolio of Raphael Evan Wijayanto.",
  icons: {
    icon: "/logos/R_Dark_Theme.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var key = "rew-portfolio-theme";
                  var savedTheme = localStorage.getItem(key);
                  var theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

                  document.documentElement.classList.toggle("light", theme === "light");
                  document.documentElement.style.colorScheme = theme;
                } catch (error) {
                  document.documentElement.classList.remove("light");
                  document.documentElement.style.colorScheme = "dark";
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}