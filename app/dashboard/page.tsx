'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true); // loading state

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Dashboard token:', token);

    if (!token) {
      router.push('/login');
    } else {
      setIsChecking(false); // token exists, stop loading
    }
  }, [router]);

  if (isChecking) {
    return <p>Checking authentication...</p>;
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to Dashboard</h1>
      <p>You are logged in.</p>
    </main>
  );
}
