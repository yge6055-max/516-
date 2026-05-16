import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "516경은 - 교육 서비스",
  description: "경은이 교육실에 오신 것을 환영합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50`}>
        {/* 상단 헤더 컴포넌트 */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
              516경은
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {/* 여기에 네비게이션 링크를 추가하세요 */}
              <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                학교생활
              </Link>
              <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                수학수업
              </Link>
            </nav>
            <div className="flex md:hidden">
              {/* 모바일 메뉴 버튼 자리 */}
              <button className="p-2 -mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* 하단 푸터 컴포넌트 */}
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} 516경은. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
              <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">이용약관</Link>
              <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">개인정보처리방침</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
