import { Header } from '@/components/Header';
import { BottomBar } from '@/components/BottomBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col bg-background">
      <Header />
      <main className="flex-1 overflow-y-auto p-4 pb-20">{children}</main>
      <BottomBar />
    </div>
  );
}
