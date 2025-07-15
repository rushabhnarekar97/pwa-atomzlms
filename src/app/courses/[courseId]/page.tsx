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
      <div className="relative h-40">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="p-4">
        <Button variant="ghost" asChild className="mb-2 -ml-2">
          <Link href="/dashboard">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>

        <h1 className="mb-2 text-xl font-bold">{course.title}</h1>
        <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>
        
        <div className="mb-6 flex items-center gap-4 text-sm">
            <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2">
                <BookOpen className="h-3.5 w-3.5" />
                {totalChapters} Chapters
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2">
                <Clock className="h-3.5 w-3.5" />
                {totalDuration} min
            </Badge>
        </div>

        <Accordion type="single" collapsible className="w-full" defaultValue={`item-${course.modules[0]?.id}`}>
          {course.modules.map((module) => (
            <AccordionItem value={`item-${module.id}`} key={module.id} className="mb-2 rounded-lg border-0 bg-muted/50">
              <AccordionTrigger className="px-4 py-3 text-sm font-semibold hover:no-underline">
                {module.title}
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <ul className="space-y-1 p-2 pt-0">
                  {module.chapters.map((chapter) => (
                    <li key={chapter.id}>
                      <Link href={`/courses/${course.id}/chapters/${chapter.id}`} className="block rounded-md transition-colors hover:bg-background/50">
                        <div className="flex items-center justify-between p-2">
                          <div className="flex items-center gap-3">
                            {chapter.type === 'video' ? (
                              <Video className="h-4 w-4 flex-shrink-0 text-primary" />
                            ) : (
                              <FileText className="h-4 w-4 flex-shrink-0 text-primary" />
                            )}
                            <span className="flex-1 text-xs font-medium">{chapter.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
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
