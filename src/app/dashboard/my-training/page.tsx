import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function MyTrainingPage() {
  const enrolledCourses = courses.filter((course) => course.enrolled);

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
        <h1 className="text-2xl font-bold tracking-tighter">My Training</h1>
        <p className="text-muted-foreground">
          Courses you are currently enrolled in.
        </p>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="space-y-4">
          {enrolledCourses.map((course) => {
            const progress = calculateProgress(course);
            return (
            <Card key={course.id} className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-base">{course.title}</CardTitle>
                    <CardDescription>{course.modules.length} Modules</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={progress} className="h-2 mb-2" />
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">{progress}% complete</p>
                        <Button asChild size="sm">
                            <Link href={`/courses/${course.id}`}>Continue</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
          )})}
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center rounded-lg border-2 border-dashed h-96">
          <div className="flex flex-col items-center gap-2 text-center p-4">
            <h3 className="text-xl font-bold tracking-tight">
              No Courses Yet
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
