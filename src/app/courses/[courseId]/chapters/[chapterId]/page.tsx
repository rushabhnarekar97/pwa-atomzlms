import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';
import { Check, ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  return courses.flatMap(course => 
    course.modules.flatMap(module => 
      module.chapters.map(chapter => ({
        courseId: course.id,
        chapterId: chapter.id,
      }))
    )
  );
}

export default function ChapterPage({ params }: { params: { courseId: string; chapterId: string } }) {
  const course = courses.find((c) => c.id === params.courseId);
  if (!course) notFound();

  const chapter = course.modules
    .flatMap((m) => m.chapters)
    .find((c) => c.id === params.chapterId);

  if (!chapter) notFound();

  const isCompleted = chapter.completed;

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1">
        <div className="p-4">
          <div className="mb-4">
              <Button variant="ghost" asChild className="-ml-2">
                  <Link href={`/courses/${params.courseId}`}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Course
                  </Link>
              </Button>
          </div>

          <div className="mb-4 space-y-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{course.title}</p>
              <h1 className="text-2xl font-bold tracking-tighter">{chapter.title}</h1>
          </div>
        </div>

        {chapter.type === 'video' ? (
            <div className="aspect-video">
            <iframe
                className="h-full w-full"
                src={chapter.content}
                title={chapter.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
        ) : (
            <article className="prose prose-sm dark:prose-invert max-w-none p-4 prose-p:text-muted-foreground prose-headings:font-bold prose-headings:tracking-tighter">
                <p>{chapter.content}</p>
            </article>
        )}
      </div>
      <div className="p-4 border-t bg-background">
          <Button className="w-full" disabled={isCompleted}>
            <Check className="mr-2 h-4 w-4" />
            {isCompleted ? 'Completed' : 'Mark as Complete'}
          </Button>
      </div>
    </div>
  );
}
