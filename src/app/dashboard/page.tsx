import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/data';
import { BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function DashboardPage() {
  const continueLearningCourse = courses.find(c => c.enrolled);

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight">Hello User!</h1>
        <p className="text-sm text-muted-foreground">
          Let's continue where you left off.
        </p>
      </div>

      {continueLearningCourse && (
        <div>
          <h2 className="mb-3 text-lg font-semibold">Continue Learning</h2>
          <Link
            href={`/courses/${continueLearningCourse.id}`}
            className="block"
          >
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src={continueLearningCourse.image}
                  alt={continueLearningCourse.title}
                  fill
                  className="object-cover"
                  data-ai-hint="code react"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-base font-bold">
                  {continueLearningCourse.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    <span>{continueLearningCourse.modules.length} Modules</span>
                  </div>
                </div>
                <Progress value={33} className="mt-3 h-2" />
                <p className="mt-1 text-xs text-muted-foreground">
                  33% complete
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      )}
       <div>
        <h2 className="mb-3 text-lg font-semibold">Recommended For You</h2>
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
           {courses.filter(c => !c.enrolled).slice(0, 2).map((course) => (
             <Link href={`/courses/${course.id}`} key={course.id} className="block">
               <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                 <div className="relative h-32 w-full">
                   <Image
                     src={course.image}
                     alt={course.title}
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div className="flex flex-1 flex-col p-3">
                   <CardTitle className="mb-1 text-sm font-semibold leading-tight">{course.title}</CardTitle>
                   <p className="flex-grow text-xs text-muted-foreground line-clamp-2">{course.description}</p>
                 </div>
               </Card>
             </Link>
           ))}
         </div>
       </div>
    </div>
  );
}
