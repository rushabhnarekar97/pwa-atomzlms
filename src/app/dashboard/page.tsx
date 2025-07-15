import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-2 text-xl font-bold tracking-tight">My Courses</h1>
        <p className="text-sm text-muted-foreground mb-6">Continue your learning journey.</p>
        
        <div className="grid grid-cols-1 gap-4">
          {courses.map((course) => (
            <Card key={course.id} className="flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
               <Link href={`/courses/${course.id}`} className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <div className="relative h-32 w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      data-ai-hint={
                        course.id === 'nextjs-fundamentals' ? 'code react' :
                        course.id === 'react-mastery' ? 'code abstract' :
                        course.id === 'tailwind-css-design' ? 'design ui' :
                        'mobile web'
                      }
                    />
                  </div>
                </CardHeader>
                <div className="flex flex-1 flex-col p-4">
                  <CardTitle className="mb-1 text-base font-bold">{course.title}</CardTitle>
                  <CardDescription className="flex-grow text-xs leading-relaxed">{course.description}</CardDescription>
                </div>
                <CardFooter className="p-4 pt-0">
                   <Badge variant="secondary">{course.modules.length} Modules</Badge>
                </CardFooter>
               </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
