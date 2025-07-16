import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { courses } from '@/lib/data';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const continueLearningCourse = courses.find((c) => c.enrolled);
  const recommendedCourses = courses.filter((c) => !c.enrolled).slice(0, 3);

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">Hello User!</h1>
        <p className="text-muted-foreground">
          Let&apos;s continue where you left off.
        </p>
      </div>

      {continueLearningCourse && (
        <div>
          <h2 className="mb-4 text-xl font-bold tracking-tight">
            Continue Learning
          </h2>
          <Link href={`/courses/${continueLearningCourse.id}`} className="block">
            <Card className="overflow-hidden border-2 border-primary/50 shadow-none transition-all hover:border-primary">
              <CardHeader>
                <CardTitle>{continueLearningCourse.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-xs">
                  <BookOpen className="h-3 w-3" />
                  <span>{continueLearningCourse.modules.length} Modules</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={33} className="h-2" />
                <p className="mt-2 text-sm text-muted-foreground">
                  33% complete
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      )}

      <div>
        <h2 className="mb-4 text-xl font-bold tracking-tight">
          Recommended For You
        </h2>
        <div className="space-y-3">
          {recommendedCourses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="block">
              <Card className="transition-colors hover:bg-muted/50">
                <div className="flex items-center p-4">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <p className="font-semibold">{course.title}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {course.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
