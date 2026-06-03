import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Quest Board",
  description: "社会課題をクエストとして公開し、仲間を集めて解決するプラットフォーム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={geist.className}>
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <header className="sticky top-0 z-50 bg-gray-900 text-white border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-lg"
                >
                  <span className="text-2xl">⚔️</span>
                  <span>Social Quest Board</span>
                </Link>
                <nav className="hidden md:flex items-center gap-4 text-sm text-gray-300">
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    クエスト
                  </Link>
                  <Link
                    href="/companies"
                    className="hover:text-white transition-colors"
                  >
                    企業・団体
                  </Link>
                  <Link
                    href="/map"
                    className="hover:text-white transition-colors"
                  >
                    クエストマップ
                  </Link>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:block relative">
                  <input
                    type="text"
                    placeholder="クエストを検索..."
                    className="bg-gray-800 text-sm rounded-md pl-8 pr-3 py-1.5 w-64 border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                  />
                  <svg
                    className="absolute left-2.5 top-2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors cursor-pointer">
                  + クエスト作成
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
            <p>Social Quest Board — 社会課題を、みんなのクエストに。</p>
            <p className="mt-1 text-gray-500">
              Powered by パラドックス visions事業部
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
