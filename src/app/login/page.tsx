import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/Logo';

export default function LoginPage() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm border-0 shadow-none sm:border sm:shadow-sm">
        <CardHeader className="items-center text-center">
          <Logo className="mb-4" />
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="name@example.com" type="email" defaultValue="user@example.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Password" type="password" defaultValue="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button asChild className="w-full">
            <Link href="/dashboard">Login</Link>
          </Button>
          <p className="mt-4 text-xs text-center text-muted-foreground">
            Don't have an account? <Link href="#" className="underline text-primary">Sign up</Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
