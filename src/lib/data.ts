export interface Chapter {
  id: string;
  title: string;
  type: 'video' | 'reading';
  content: string; // URL for video, markdown/text for reading
  duration: number; // in minutes
}

export interface Module {
  id:string;
  title: string;
  chapters: Chapter[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  modules: Module[];
}

export const courses: Course[] = [
  {
    id: 'nextjs-fundamentals',
    title: 'Next.js Fundamentals',
    description: 'Learn the basics of Next.js, from routing to data fetching.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=870&auto=format&fit=crop',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Introduction to Next.js',
        chapters: [
          { id: 'c1-1', title: 'What is Next.js?', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 15 },
          { id: 'c1-2', title: 'Setting Up Your First Project', type: 'reading', content: 'To get started with Next.js, you need to have Node.js and npm installed. Open your terminal and run `npx create-next-app@latest`. This command will bootstrap a new Next.js application with all the necessary configurations. Follow the prompts to name your project and choose your settings. Once the installation is complete, navigate into your project directory and run `npm run dev` to start the development server. You can now view your application at http://localhost:3000.', duration: 10 },
          { id: 'c1-3', title: 'Pages and Routing', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 20 },
        ],
      },
      {
        id: 'm2',
        title: 'Module 2: App Router',
        chapters: [
          { id: 'c2-1', title: 'Introduction to the App Router', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 18 },
          { id: 'c2-2', title: 'Server Components vs. Client Components', type: 'reading', content: 'The App Router introduces two types of components: Server Components and Client Components. Server Components run on the server and are the default, which helps reduce the amount of JavaScript sent to the client. Client Components are rendered on the client-side and can use state and effects. You can opt into Client Components by adding the "use client" directive at the top of a file.', duration: 12 },
        ],
      },
    ],
  },
  {
    id: 'react-mastery',
    title: 'React Mastery',
    description: 'Become a pro in React with hooks, state management, and more.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=870&auto=format&fit=crop',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: React Hooks Deep Dive',
        chapters: [
          { id: 'c1-1', title: 'useState and useEffect', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 25 },
          { id: 'c1-2', title: 'useContext and useReducer', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 22 },
        ],
      },
    ],
  },
  {
    id: 'tailwind-css-design',
    title: 'Responsive Design with Tailwind',
    description: 'Master responsive web design using Tailwind CSS utility classes.',
    image: 'https://images.unsplash.com/photo-1617042375876-a97e0566d302?q=80&w=870&auto=format&fit=crop',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Core Concepts',
        chapters: [
            { id: 'c1-1', title: 'Utility-First Fundamentals', type: 'reading', content: 'Tailwind CSS is a utility-first CSS framework. Instead of pre-styled components, it provides low-level utility classes that you can compose to build any design directly in your markup. This approach offers maximum flexibility and avoids the need to write custom CSS.', duration: 10 },
            { id: 'c1-2', title: 'Handling Hover, Focus, & Other States', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 15 },
        ],
      },
    ],
  },
  {
    id: 'pwa-essentials',
    title: 'PWA Essentials',
    description: 'Build Progressive Web Apps that are fast, reliable, and engaging.',
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=870&auto=format&fit=crop',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Getting Started',
        chapters: [
            { id: 'c1-1', title: 'What is a PWA?', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 10 },
            { id: 'c1-2', title: 'The Web App Manifest', type: 'reading', content: 'The web app manifest is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user\'s desktop or mobile device. It includes information like the app name, icons, and theme colors.', duration: 12 },
        ],
      },
    ],
  },
];
