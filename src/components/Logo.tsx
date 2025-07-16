import { cn } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="rounded-lg bg-primary p-1.5">
        <GraduationCap className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-lg font-bold tracking-tighter text-foreground">ATOMZLMS</span>
    </div>
  );
}
