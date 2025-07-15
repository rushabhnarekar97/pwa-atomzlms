'use client';
import { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { courses } from '@/lib/data';
import { askTutor, AskTutorInput } from '@/ai/flows/tutor';
import { ArrowLeft, Send, User, Bot } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export default function TutorPage() {
  const params = useParams();
  const { courseId, chapterId } = params;

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const course = courses.find((c) => c.id === courseId);
  if (!course) notFound();

  const chapter = course.modules
    .flatMap((m) => m.chapters)
    .find((c) => c.id === chapterId);

  if (!chapter) notFound();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const tutorInput: AskTutorInput = {
            chapterContext: chapter.content,
            question: input,
        };
        const response = await askTutor(tutorInput);
        const assistantMessage: Message = { role: 'assistant', content: response };
        setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
        console.error("Error asking tutor:", error);
        const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again later." };
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background/95 px-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/courses/${courseId}/chapters/${chapterId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="text-center">
          <h1 className="text-sm font-semibold">AI Tutor</h1>
          <p className="text-xs text-muted-foreground">{chapter.title}</p>
        </div>
        <div className="w-8"></div>
      </header>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
            {messages.map((message, index) => (
            <div key={index} className={cn("flex items-start gap-3", message.role === 'user' ? "justify-end" : "justify-start")}>
                {message.role === 'assistant' && (
                     <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                )}
                 <div className={cn("max-w-[75%] rounded-lg p-3 text-sm", message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                    <p>{message.content}</p>
                </div>
                 {message.role === 'user' && (
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                )}
            </div>
            ))}
             {isLoading && (
                 <div className="flex items-start gap-3 justify-start">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                    <div className="max-w-[75%] rounded-lg p-3 text-sm bg-muted">
                        <div className="flex items-center space-x-1">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50 [animation-delay:-0.3s]"></span>
                            <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50 [animation-delay:-0.15s]"></span>
                            <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50"></span>
                        </div>
                    </div>
                </div>
             )}
        </div>
      </ScrollArea>
      
      <div className="border-t bg-background p-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..." 
            autoComplete="off"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
