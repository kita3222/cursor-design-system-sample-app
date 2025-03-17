import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./_components/layout";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dance - パフォーマンスチケット販売プラットフォーム",
  description:
    "舞台、コンサート、ダンスショーなどのパフォーマンス系イベントに特化したチケット販売プラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={`${notoSansJP.className} min-h-screen flex flex-col bg-white`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
