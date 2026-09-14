'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [callbackUrl, setCallbackUrl] = useState('/editmenu');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setCallbackUrl(params.get('callbackUrl') || '/editmenu');
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setError('');

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    setPending(false);

    if (result?.error) {
      setError('Neispravna korisnička imena ili lozinka.');
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#101010] px-4 py-12 text-[#f5f0e8]">
      <div className="w-full max-w-md rounded border border-white/10 bg-[#161616] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#d1b06f]">Admin login</p>
        <h1 className="mt-3 font-display text-3xl tracking-[0.08em] text-[#d1b06f]">Una Trattoria</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Username</label>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-3 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25"
              name="username"
              autoComplete="off"
              spellCheck={false}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-3 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25"
              name="password"
              autoComplete="new-password"
              spellCheck={false}
              required
            />
          </div>

          {error ? (
            <p className="rounded border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded bg-[#d1b06f] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#111] transition hover:bg-[#ebc77b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? 'Signing in...' : 'Log in'}
          </button>
        </form>
      </div>
    </main>
  );
}
