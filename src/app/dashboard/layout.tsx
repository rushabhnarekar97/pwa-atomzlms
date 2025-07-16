import { Header } from '@/components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col bg-background">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  );
}
