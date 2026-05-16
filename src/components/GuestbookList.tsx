import { GuestbookEntry } from '@/lib/db';

export default function GuestbookList({ entries }: { entries: GuestbookEntry[] }) {
  if (!entries || entries.length === 0) {
    return (
      <div className="text-center py-10 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 mt-8">
        아직 작성된 방명록이 없습니다.<br />첫 번째 방명록을 남겨주세요!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mt-8">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">최근 방명록</h3>
      {entries.map((entry) => (
        <div key={entry.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-slate-800 dark:text-slate-200">{entry.name}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
              {new Date(entry.created_at).toLocaleString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">{entry.message}</p>
        </div>
      ))}
    </div>
  );
}
