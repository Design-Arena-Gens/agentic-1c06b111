import { ReactNode } from 'react';
import { AppSidebar } from '@/components/layout/Sidebar';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container-max py-8 grid md:grid-cols-[240px,1fr] gap-8">
      <AppSidebar />
      <div>{children}</div>
    </div>
  );
}
