
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full w-full flex-col bg-background">
      {/* The Header is now part of the scrollable content within each page */}
      {children}
    </div>
  );
}
