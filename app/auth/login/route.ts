// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  // Dummy logic — Replace with real DB lookup
  if (username === 'admin' && password === 'admin') {
    return NextResponse.json({ token: 'fake-jwt-token' });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
