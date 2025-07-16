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

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">My Training</h1>
        <p className="text-muted-foreground">
          Courses you are currently enrolled in.
        </p>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.modules.length} Modules</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={33} className="h-2 mb-2" />
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">33% complete</p>
                        <Button asChild size="sm">
                            <Link href={`/courses/${course.id}`}>Continue</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
          ))}
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
