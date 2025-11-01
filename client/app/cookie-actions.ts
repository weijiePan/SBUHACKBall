"use server"

import { cookies } from "next/headers";
export default async function toggleTheme() {
    const cookieStore = await cookies()
    const oldTheme = cookieStore.get('theme');
    const newTheme = oldTheme?.value === 'light' ? 'dark' : 'light';
    cookieStore.set('theme', newTheme)
}