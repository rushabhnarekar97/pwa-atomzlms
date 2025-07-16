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

  const calculateProgress = (course: (typeof courses)[0]) => {
    const totalChapters = course.modules.reduce(
      (acc, module) => acc + module.chapters.length,
      0
    );
    if (totalChapters === 0) return 0;
    const completedChapters = course.modules.reduce(
      (acc, module) =>
        acc + module.chapters.filter((chapter) => chapter.completed).length,
      0
    );
    return Math.round((completedChapters / totalChapters) * 100);
  };

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tighter">Hello User!</h1>
        <p className="text-muted-foreground">
          Let&apos;s continue where you left off.
        </p>
      </div>

      {continueLearningCourse && (
        <div>
          <h2 className="mb-4 text-lg font-bold tracking-tight">
            Continue Learning
          </h2>
          <Link href={`/courses/${continueLearningCourse.id}`} className="block">
            <Card className="overflow-hidden border-2 border-primary/50 shadow-none transition-all hover:border-primary">
              <CardHeader>
                <CardTitle className="text-base">{continueLearningCourse.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-xs">
                  <BookOpen className="h-3 w-3" />
                  <span>{continueLearningCourse.modules.length} Modules</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={calculateProgress(continueLearningCourse)} className="h-2" />
                <p className="mt-2 text-sm text-muted-foreground">
                  {calculateProgress(continueLearningCourse)}% complete
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      )}

      <div>
        <h2 className="mb-4 text-lg font-bold tracking-tight">
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
                      data-ai-hint={course.id.split('-')[0] + ' ' + course.id.split('-')[1]}
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
