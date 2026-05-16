import Link from "next/link";
import GuestbookForm from "@/components/GuestbookForm";
import GuestbookList from "@/components/GuestbookList";
import { getGuestbookEntries } from "@/app/actions";

export default async function Home() {
  const entries = await getGuestbookEntries();

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full px-4 py-16 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      
      {/* 히어로(Hero) 섹션 */}
      <section className="text-center max-w-3xl mx-auto flex flex-col items-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-semibold tracking-wider mb-6">
          ✨ NEW LEARNING PLATFORM ✨
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            경은쌤의 연구실 👩‍🏫✨
          </span>
          에<br className="hidden sm:block" /> 오신 것을 환영합니다 🎈
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed">
          여기는 학생들의 즐거운 수학수업 🧮 을 위해 열심히 연구하는 공간입니다 💡
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* 가짜(Placeholder) 버튼 */}
          <Link 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
          >
            🚀 학습 시작하기
          </Link>
          
          <Link 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 w-full sm:w-auto"
          >
            👀 둘러보기
          </Link>
        </div>
      </section>

      {/* 
        =========================================
        방명록 섹션
        =========================================
      */}
      <div className="w-full max-w-2xl mx-auto mt-24">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6 text-center">💌 응원의 한마디</h2>
        <GuestbookForm />
        <GuestbookList entries={entries} />
      </div>

    </div>
  );
}
