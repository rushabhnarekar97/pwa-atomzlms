import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';
import { ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ChapterPage({ params }: { params: { courseId: string; chapterId: string } }) {
  const course = courses.find((c) => c.id === params.courseId);
  if (!course) notFound();

  const chapter = course.modules
    .flatMap((m) => m.chapters)
    .find((c) => c.id === params.chapterId);

  if (!chapter) notFound();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      <div className="container mx-auto max-w-5xl flex-1 px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" asChild className="-ml-4">
                <Link href={`/courses/${params.courseId}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Course
                </Link>
            </Button>
        </div>

        <div className="bg-card border rounded-lg p-6 lg:p-8">
            <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">{course.title}</p>
                <h1 className="text-4xl font-bold tracking-tight">{chapter.title}</h1>
            </div>

            {chapter.type === 'video' ? (
                <div className="aspect-video overflow-hidden rounded-lg border">
                <iframe
                    className="h-full w-full"
                    src={chapter.content}
                    title={chapter.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            ) : (
                <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p>{chapter.content}</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
