import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { courses } from '@/lib/data';
import { BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

export default function MyTrainingPage() {
  const enrolledCourses = courses.filter((course) => course.enrolled);

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight">My Training</h1>
        <p className="text-sm text-muted-foreground">
          Courses you are currently enrolled in.
        </p>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="block">
              <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-40 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                     data-ai-hint={
                        course.id === 'nextjs-fundamentals' ? 'code react' :
                        course.id === 'react-mastery' ? 'code abstract' :
                        'design ui'
                    }
                  />
                </div>
                <CardHeader>
                    <CardTitle className="text-base">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.modules.length} Modules</span>
                        </div>
                    </div>
                    <Progress value={33} className="mt-3 h-2" />
                    <p className="mt-1 text-xs text-muted-foreground">33% complete</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-96">
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-lg font-bold tracking-tight">
              You haven't enrolled in any courses
            </h3>
            <p className="text-sm text-muted-foreground">
              Visit the catalog to find your next learning adventure.
            </p>
            <Button asChild className="mt-4">
              <Link href="/dashboard/catalog">Browse Catalog</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
