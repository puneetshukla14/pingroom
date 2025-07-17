'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (res.ok) router.push('/login');
    else alert('Signup failed');
  };

  return (
    <form onSubmit={handleSubmit}>
        <p style={{ marginTop: '1rem' }}>
  Already have an account?{' '}
  <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
    Login
  </a>
</p>

      <h2>Signup</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Create Account</button>
    </form>
    
  );
}
