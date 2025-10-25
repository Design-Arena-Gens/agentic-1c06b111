"use client";
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';
import { create } from 'zustand';

interface AuthState {
  user: { id: string; email: string; name?: string } | null;
  signIn: (email: string) => void;
  signOut: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  signIn: (email) => set({ user: { id: 'local', email } }),
  signOut: () => set({ user: null })
}));

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem('auth:user');
      if (raw) {
        try { useAuth.setState({ user: JSON.parse(raw) }); } catch {}
      }
      const unsub = useAuth.subscribe((s) => {
        if (s.user) localStorage.setItem('auth:user', JSON.stringify(s.user));
        else localStorage.removeItem('auth:user');
      });
      return () => { unsub(); };
    }
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
