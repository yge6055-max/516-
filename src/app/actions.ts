'use server';

import { revalidatePath } from 'next/cache';
import { sql, GuestbookEntry } from '@/lib/db';

// Ensure the table exists
export async function initDb() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS guestbook (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}

// Fetch entries from the database
export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  try {
    await initDb();
    const entries = await sql`SELECT * FROM guestbook ORDER BY created_at DESC LIMIT 50`;
    return entries as GuestbookEntry[];
  } catch (error) {
    console.error('Failed to fetch guestbook entries:', error);
    return [];
  }
}

// Add a new entry to the database
export async function addGuestbookEntry(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim() === '' || !message || message.trim() === '') {
      return { success: false, message: '이름과 메시지를 모두 입력해주세요.' };
    }

    await initDb();
    await sql`
      INSERT INTO guestbook (name, message)
      VALUES (${name.trim()}, ${message.trim()})
    `;

    revalidatePath('/');
    return { success: true, message: '방명록이 등록되었습니다.', timestamp: Date.now() };
  } catch (error) {
    console.error('Failed to add guestbook entry:', error);
    return { success: false, message: '서버 오류로 등록에 실패했습니다.' };
  }
}
