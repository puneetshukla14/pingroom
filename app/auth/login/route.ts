import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  await connectDB();

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET || 'your_secret_key',
    { expiresIn: '7d' }
  );

  return NextResponse.json({ token }, { status: 200 });
}
