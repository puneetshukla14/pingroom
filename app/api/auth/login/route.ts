import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  // Dummy user check (replace this with real DB logic)
  if (username === 'admin' && password === 'admin') {
    return NextResponse.json({ token: 'mock-token-123' });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
