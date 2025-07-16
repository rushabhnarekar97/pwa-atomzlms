import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { courses } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { BookOpen, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CatalogPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-xl font-bold tracking-tight">Course Catalog</h1>
            <p className="text-sm text-muted-foreground">
                Browse and enroll in new courses.
            </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <Link href={`/courses/${course.id}`} className="block">
              <div className="relative h-40 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                   data-ai-hint={
                        course.id === 'nextjs-fundamentals' ? 'code react' :
                        course.id === 'react-mastery' ? 'code abstract' :
                        course.id === 'tailwind-css-design' ? 'design ui' :
                        'mobile web'
                    }
                />
              </div>
            </Link>
            <CardHeader>
              <CardTitle className="text-base">{course.title}</CardTitle>
              <CardDescription className="text-xs line-clamp-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
               <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                    <BookOpen className="h-3 w-3" />
                    {course.modules.length} Modules
                </Badge>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Enroll
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
