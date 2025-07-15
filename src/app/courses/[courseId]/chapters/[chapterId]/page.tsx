import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';
import { ChevronLeft } from 'lucide-react';
import { Header } from '@/components/Header';

export default function ChapterPage({ params }: { params: { courseId: string; chapterId: string } }) {
  const course = courses.find((c) => c.id === params.courseId);
  if (!course) notFound();

  const chapter = course.modules
    .flatMap((m) => m.chapters)
    .find((c) => c.id === params.chapterId);

  if (!chapter) notFound();

  return (
    <>
    <Header />
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto max-w-5xl flex-1 px-4 py-8">
        <div className="mb-4">
            <Button variant="ghost" asChild className="-ml-2">
                <Link href={`/courses/${params.courseId}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Course
                </Link>
            </Button>
        </div>

        <div className="bg-card">
            <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{course.title}</p>
                <h1 className="text-2xl font-bold tracking-tight">{chapter.title}</h1>
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
                <div className="prose prose-sm max-w-none dark:prose-invert">
                    <p>{chapter.content}</p>
                </div>
            )}
        </div>
      </div>
    </div>
    </>
  );
}
