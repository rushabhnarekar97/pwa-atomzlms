import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { BookOpen } from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-2 text-xl font-bold tracking-tight">My Courses</h1>
        <p className="text-sm text-muted-foreground mb-6">Continue your learning journey.</p>
        
        <div className="grid grid-cols-1 gap-4">
          {courses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="block">
              <Card className="flex h-full flex-row overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
                  <div className="relative h-28 w-28 flex-shrink-0">
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
                <div className="flex flex-1 flex-col p-3">
                  <CardTitle className="mb-1 text-sm font-bold leading-tight">{course.title}</CardTitle>
                  <CardDescription className="flex-grow text-xs leading-relaxed line-clamp-2">{course.description}</CardDescription>
                  <CardFooter className="p-0 pt-2">
                   <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                     <BookOpen className="h-3 w-3" />
                     {course.modules.length} Modules
                    </Badge>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
