import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { courses } from '@/lib/data';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

export default function CatalogPage() {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tighter">Course Catalog</h1>
        <p className="text-muted-foreground">
          Browse and enroll in new courses.
        </p>
      </div>
      <div className="space-y-4">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden flex flex-col">
            <Link href={`/courses/${course.id}`}>
              <div className="relative h-32 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  data-ai-hint={
                    course.id === 'nextjs-fundamentals'
                      ? 'code react'
                      : course.id === 'react-mastery'
                      ? 'code abstract'
                      : course.id === 'tailwind-css-design'
                      ? 'design ui'
                      : 'mobile web'
                  }
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-base">
                  <Link href={`/courses/${course.id}`} className="hover:underline">
                    {course.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2 pt-1">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <div className="flex-grow" />
              <div className="mt-4">
                <Button className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Enroll
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
