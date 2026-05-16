'use client';

import { useActionState, useRef, useEffect } from 'react';
import { addGuestbookEntry } from '@/app/actions';

export default function GuestbookForm() {
  const [state, formAction, isPending] = useActionState(addGuestbookEntry, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">방명록 남기기</h3>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">이름</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          maxLength={50}
          className="px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
          placeholder="이름을 입력하세요"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">메시지</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          maxLength={500}
          rows={3}
          className="px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white resize-none"
          placeholder="응원의 메시지를 남겨주세요!"
        />
      </div>

      {state?.message && (
        <p className={`text-sm ${state.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {state.message}
        </p>
      )}

      <button 
        type="submit" 
        disabled={isPending}
        className="mt-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isPending ? '등록 중...' : '방명록 등록'}
      </button>
    </form>
  );
}
