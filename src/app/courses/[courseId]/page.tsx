import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';
import { BookOpen, ChevronLeft, Clock, FileText, Video } from 'lucide-react';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.id,
  }));
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = courses.find((c) => c.id === params.courseId);

  if (!course) {
    notFound();
  }

  const totalChapters = course.modules.reduce((acc, module) => acc + module.chapters.length, 0);
  const totalDuration = course.modules.reduce((acc, module) => acc + module.chapters.reduce((chapAcc, chap) => chapAcc + chap.duration, 0), 0);

  return (
    <>
      <Header />
      <div className="p-4">
        <Button variant="ghost" asChild className="mb-4 -ml-2">
          <Link href="/dashboard">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
        
        <div className="space-y-2 mb-6">
            <h1 className="text-2xl font-bold tracking-tighter">{course.title}</h1>
            <p className="text-muted-foreground">{course.description}</p>
        </div>
        
        <div className="mb-6 flex items-center gap-4 text-sm">
            <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5">
                <BookOpen className="h-4 w-4" />
                {totalChapters} Chapters
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5">
                <Clock className="h-4 w-4" />
                {totalDuration} min
            </Badge>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3" defaultValue={`item-${course.modules[0]?.id}`}>
          {course.modules.map((module) => (
            <AccordionItem value={`item-${module.id}`} key={module.id} className="rounded-lg border bg-muted/50">
              <AccordionTrigger className="px-4 py-3 text-base font-semibold hover:no-underline">
                {module.title}
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <ul className="divide-y divide-border">
                  {module.chapters.map((chapter, index) => (
                    <li key={chapter.id}>
                      <Link href={`/courses/${course.id}/chapters/${chapter.id}`} className="block transition-colors hover:bg-background/50">
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-3">
                            {chapter.type === 'video' ? (
                              <Video className="h-5 w-5 flex-shrink-0 text-primary" />
                            ) : (
                              <FileText className="h-5 w-5 flex-shrink-0 text-primary" />
                            )}
                            <span className="flex-1 font-medium">{chapter.title}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{chapter.duration} min</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
