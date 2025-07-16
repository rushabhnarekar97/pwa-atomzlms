import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h1 className="text-xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings.</p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://placehold.co/100x100.png" alt="@user" data-ai-hint="person avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <p className="text-lg font-semibold">User</p>
          <p className="text-sm text-muted-foreground">user@example.com</p>
        </div>
      </div>

      <Card>
        <CardHeader>
            <CardTitle className="text-base">Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col divide-y divide-border">
                <button className="flex items-center justify-between py-3 text-left">
                    <span>Edit Profile</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
                <button className="flex items-center justify-between py-3 text-left">
                    <span>Change Password</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
                <button className="flex items-center justify-between py-3 text-left">
                    <span>Notifications</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
            </div>
        </CardContent>
      </Card>

      <Button variant="outline" asChild>
        <Link href={basePath + "/login"}>
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Link>
      </Button>
    </div>
  );
}
