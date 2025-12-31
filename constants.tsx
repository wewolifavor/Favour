
import { Project, Skill } from './types';

export const SKILLS: Skill[] = [
  { 
    name: 'HTML', 
    icon: 'fa-brands fa-html5', 
    category: 'Frontend',
    longDescription: 'HyperText Markup Language is the backbone of the web. I use semantic HTML5 to ensure that web applications are accessible, SEO-friendly, and structured correctly. From building complex forms to organizing content hierarchy, my proficiency in HTML ensures a solid foundation for every project.'
  },
  { 
    name: 'CSS', 
    icon: 'fa-brands fa-css3-alt', 
    category: 'Frontend',
    longDescription: 'Cascading Style Sheets are where the magic happens. I specialize in modern CSS, including Flexbox, Grid, and advanced animations. I primarily use Tailwind CSS for rapid, maintainable styling, but I have a deep understanding of core CSS principles to create responsive and visually stunning layouts.'
  },
  { 
    name: 'JavaScript', 
    icon: 'fa-brands fa-js', 
    category: 'Language',
    longDescription: 'JavaScript is the core engine of interactivity in my applications. I stay up-to-date with ES6+ features, handling asynchronous operations, DOM manipulation, and complex state management. My approach to JS is focused on performance, modularity, and clean, readable code.'
  },
  { 
    name: 'React', 
    icon: 'fa-brands fa-react', 
    category: 'Frontend',
    longDescription: 'React is my primary framework for building dynamic user interfaces. I am expert in using Hooks, Context API, and modern patterns to create scalable component-based architectures. I focus on building reusable components that provide a seamless user experience across different devices.'
  },
  { 
    name: 'Supabase', 
    icon: 'fa-solid fa-database', 
    category: 'Backend',
    longDescription: 'Supabase is my go-to "Backend as a Service". It allows me to quickly implement robust Postgres databases, authentication, and real-time features. I leverage its powerful API to handle data synchronization and secure user management without the overhead of traditional backend infrastructure.'
  },
  { 
    name: 'GitHub', 
    icon: 'fa-brands fa-github', 
    category: 'Tool',
    longDescription: 'GitHub is central to my development workflow. I use it for version control, collaboration, and CI/CD pipelines. I am comfortable with branching strategies, pull requests, and using GitHub Actions to automate testing and deployment, ensuring high-quality code delivery.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Modern E-Commerce',
    description: 'A full-stack commerce solution built with React and Supabase featuring real-time inventory and a sleek storefront.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Supabase', 'Tailwind'],
    link: 'https://wepstore.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A professional dark-themed productivity dashboard for managing complex workflows and team assignments.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'React', 'PostgreSQL'],
    link: 'https://coda.io'
  },
  {
    id: 3,
    title: 'Weather Visualizer',
    description: 'A clean, data-rich weather dashboard featuring 10-day forecasts and interactive graphs.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1000&auto=format&fit=crop',
    tags: ['JavaScript', 'API', 'Charts'],
    link: 'https://www.ventusky.com'
  }
];
