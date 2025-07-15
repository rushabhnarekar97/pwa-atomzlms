import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';
import { BrainCircuit, ChevronLeft } from 'lucide-react';

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

          <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{course.title}</p>
              <h1 className="text-xl font-bold tracking-tight">{chapter.title}</h1>
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
            <div className="prose prose-sm max-w-none prose-invert p-4">
                <p>{chapter.content}</p>
            </div>
        )}
      </div>
    </div>
  );
}
