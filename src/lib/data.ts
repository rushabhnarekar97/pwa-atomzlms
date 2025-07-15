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
        title: 'Introduction to Next.js',
        chapters: [
          { id: 'c1-1', title: 'What is Next.js?', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 15 },
          { id: 'c1-2', title: 'Setting Up Your First Project', type: 'reading', content: 'To get started with Next.js, you need to have Node.js and npm installed. Open your terminal and run `npx create-next-app@latest`. This command will bootstrap a new Next.js application with all the necessary configurations. Follow the prompts to name your project and choose your settings. Once the installation is complete, navigate into your project directory and run `npm run dev` to start the development server. You can now view your application at http://localhost:3000.', duration: 10 },
          { id: 'c1-3', title: 'Pages and Routing', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 20 },
        ],
      },
      {
        id: 'm2',
        title: 'App Router',
        chapters: [
          { id: 'c2-1', title: 'Introduction to the App Router', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 18 },
          { id: 'c2-2', title: 'Server Components vs. Client Components', type: 'reading', content: 'The App Router introduces two types of components: Server Components and Client Components. Server Components run on the server and are the default, which helps reduce the amount of JavaScript sent to the client. Client Components are rendered on the client-side and can use state and effects. You can opt into Client Components by adding the "use client" directive at the top of a file.', duration: 12 },
        ],
      },
      {
        id: 'm3',
        title: 'Data Fetching',
        chapters: [
            { id: 'c3-1', title: 'Fetching Data on the Server', type: 'reading', content: 'Next.js allows you to fetch data on the server using `fetch` in Server Components. This data can be fetched at build time or request time, enabling static site generation (SSG) and server-side rendering (SSR) out of the box. Caching strategies can be configured to optimize performance.', duration: 15 },
            { id: 'c3-2', title: 'Server Actions', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 20 },
        ]
      }
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
        title: 'React Hooks Deep Dive',
        chapters: [
          { id: 'c1-1', title: 'useState and useEffect', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 25 },
          { id: 'c1-2', title: 'useContext and useReducer', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 22 },
          { id: 'c1-3', title: 'Creating Custom Hooks', type: 'reading', content: 'Custom hooks allow you to extract component logic into reusable functions. A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks. This is a powerful way to share logic between components without using higher-order components or render props.', duration: 18 },
        ],
      },
      {
        id: 'm2',
        title: 'Advanced State Management',
        chapters: [
          { id: 'c2-1', title: 'Introduction to Zustand', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 20 },
          { id: 'c2-2', title: 'React Query for Data Fetching', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 25 },
        ],
      }
    ],
  },
  {
    id: 'tailwind-css-design',
    title: 'Responsive Design with Tailwind',
    description: 'Master responsive web design using Tailwind CSS utility classes.',
    image: 'https://images.unsplash.com/photo-1517694712202-1428bc38aa5a?q=80&w=870&auto=format&fit=crop',
    modules: [
      {
        id: 'm1',
        title: 'Core Concepts',
        chapters: [
            { id: 'c1-1', title: 'Utility-First Fundamentals', type: 'reading', content: 'Tailwind CSS is a utility-first CSS framework. Instead of pre-styled components, it provides low-level utility classes that you can compose to build any design directly in your markup. This approach offers maximum flexibility and avoids the need to write custom CSS.', duration: 10 },
            { id: 'c1-2', title: 'Handling Hover, Focus, & Other States', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 15 },
        ],
      },
       {
        id: 'm2',
        title: 'Customization',
        chapters: [
            { id: 'c2-1', title: 'The tailwind.config.js File', type: 'reading', content: 'You can customize almost everything in Tailwind, including colors, spacing, fonts, and breakpoints, by editing the `tailwind.config.js` file. The `theme` object is where you define your design system.', duration: 15 },
        ],
      }
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
        title: 'Getting Started',
        chapters: [
            { id: 'c1-1', title: 'What is a PWA?', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 10 },
            { id: 'c1-2', title: 'The Web App Manifest', type: 'reading', content: 'The web app manifest is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user\'s desktop or mobile device. It includes information like the app name, icons, and theme colors.', duration: 12 },
            { id: 'c1-3', title: 'Service Workers', type: 'video', content: 'https://www.youtube.com/embed/fmjpi_pT5ao', duration: 20 },
        ],
      },
    ],
  },
];
