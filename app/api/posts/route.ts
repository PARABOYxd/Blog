import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET() {
    try {
        const posts = await getAllPosts();
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts', details: String(error) }, { status: 500 });
    }
}
