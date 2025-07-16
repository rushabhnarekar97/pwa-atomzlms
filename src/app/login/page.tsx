import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/Logo';

export default function LoginPage() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Logo className="mb-4 inline-flex" />
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue your learning journey.</p>
        </div>
        
        <form>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" defaultValue="user@example.com" className="bg-muted/50 border-0 focus:bg-background focus:ring-1 focus:ring-ring" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Password" type="password" defaultValue="password" className="bg-muted/50 border-0 focus:bg-background focus:ring-1 focus:ring-ring" />
            </div>
          </div>
          <Button asChild className="w-full mt-8">
            <Link href="/dashboard">Login</Link>
          </Button>
        </form>
        
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account? <Link href="#" className="font-semibold text-primary hover:underline">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
