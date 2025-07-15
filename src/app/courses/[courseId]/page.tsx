import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/data';
import { BookOpen, ChevronLeft, Clock, FileText, Video } from 'lucide-react';
import { Header } from '@/components/Header';

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
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Button variant="ghost" asChild className="mb-4 -ml-2">
          <Link href="/dashboard">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>

        <h1 className="mb-2 text-xl font-bold">{course.title}</h1>
        <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>
        
        <div className="mb-6 grid grid-cols-2 gap-4">
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 pb-1">
                  <CardTitle className="text-xs font-medium">Chapters</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-3 pt-0">
                  <div className="text-lg font-bold">{totalChapters}</div>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 pb-1">
                  <CardTitle className="text-xs font-medium">Duration</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-3 pt-0">
                  <div className="text-lg font-bold">{totalDuration} min</div>
              </CardContent>
          </Card>
        </div>

        <Accordion type="single" collapsible className="w-full" defaultValue={`item-${course.modules[0]?.id}`}>
          {course.modules.map((module) => (
            <AccordionItem value={`item-${module.id}`} key={module.id} className="rounded-lg mb-2 border bg-card px-3">
              <AccordionTrigger className="py-3 text-sm font-semibold hover:no-underline">
                {module.title}
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <ul className="space-y-1 pb-2">
                  {module.chapters.map((chapter) => (
                    <li key={chapter.id}>
                      <Link href={`/courses/${course.id}/chapters/${chapter.id}`} className="block rounded-md transition-colors hover:bg-muted">
                        <div className="flex items-center justify-between p-2">
                          <div className="flex items-center gap-3">
                            {chapter.type === 'video' ? (
                              <Video className="h-4 w-4 flex-shrink-0 text-primary" />
                            ) : (
                              <FileText className="h-4 w-4 flex-shrink-0 text-primary" />
                            )}
                            <span className="text-xs font-medium">{chapter.title}</span>
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
