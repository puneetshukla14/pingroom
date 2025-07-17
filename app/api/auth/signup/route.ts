// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  // Replace this with DB logic
  console.log('Creating user:', { username, password });

  return NextResponse.json({ message: 'User created' }, { status: 200 });
}
