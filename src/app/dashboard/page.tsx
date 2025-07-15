import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { BookOpen, PlayCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function DashboardPage() {
  const continueLearningCourse = courses[0];

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6 p-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Hello User!</h1>
          <p className="text-sm text-muted-foreground">Let's continue learning.</p>
        </div>

        {continueLearningCourse && (
          <div>
            <h2 className="mb-3 text-lg font-semibold">Continue Learning</h2>
            <Link href={`/courses/${continueLearningCourse.id}`} className="block">
              <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:bg-muted/80">
                <div className="relative h-36 w-full">
                  <Image
                    src={continueLearningCourse.image}
                    alt={continueLearningCourse.title}
                    fill
                    className="object-cover"
                    data-ai-hint="code react"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base font-bold">{continueLearningCourse.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4" />
                      <span>{continueLearningCourse.modules.length} Modules</span>
                    </div>
                  </div>
                   <Progress value={33} className="mt-3 h-2" />
                   <p className="mt-1 text-xs text-muted-foreground">33% complete</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        )}

        <div>
            <h2 className="mb-3 text-lg font-semibold">All Courses</h2>
            <div className="grid grid-cols-1 gap-4">
            {courses.map((course) => (
                <Link href={`/courses/${course.id}`} key={course.id} className="block">
                <Card className="flex h-full flex-row items-center overflow-hidden transition-all duration-300 ease-in-out hover:bg-muted/80">
                    <div className="relative h-24 w-24 flex-shrink-0">
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
                        <CardTitle className="mb-1 text-sm font-semibold leading-tight">{course.title}</CardTitle>
                        <CardDescription className="flex-grow text-xs leading-relaxed text-muted-foreground line-clamp-2">{course.description}</CardDescription>
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
      </div>
    </>
  );
}
