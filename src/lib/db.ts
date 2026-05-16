import { neon } from '@neondatabase/serverless';

// Ensure the DATABASE_URL is available
if (!process.env.DATABASE_URL) {
  console.warn('DATABASE_URL is not set. Database operations will fail.');
}

// Initialize the neon client
export const sql = neon(process.env.DATABASE_URL || '');

// Define a type for our guestbook entries
export type GuestbookEntry = {
  id: number;
  name: string;
  message: string;
  created_at: Date;
};
