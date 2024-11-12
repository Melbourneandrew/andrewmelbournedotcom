import { Project } from "./ProjectTemplate";

const technologies = {
  react: "React",
  node: "Node.js",
  vue: "Vue",
  golang: "Golang",
  mongodb: "MongoDB",
  socketio: "Socket.io",
  openai: "OpenAI",
  anthropic: "Anthropic",
};

export const projects: Project[] = [
  {
    title: "AI-Powered Chat Application",
    description:
      "A real-time chat application built with modern technologies. Features include AI-powered message suggestions, multi-user support, and end-to-end encryption.",
    technologies: [
      technologies.react,
      technologies.node,
      technologies.socketio,
      technologies.openai,
    ],
    githubUrl: "https://github.com/M3LBY/ai-chat-app",
    demoUrl: "https://ai-chat-app.vercel.app",
    imageUrl: "https://placehold.co/600x400",
    imageAlt: "AI Chat Application Screenshot",
  },
  {
    title: "Stock Market Price Predictor",
    description:
      "A stock market price predictor built with modern technologies. Features include AI-powered message suggestions, multi-user support, and end-to-end encryption.",
    technologies: [
      technologies.vue,
      technologies.golang,
      technologies.socketio,
      technologies.anthropic,
    ],
    githubUrl: "https://github.com/M3LBY/ai-chat-app",
    demoUrl: "https://ai-chat-app.vercel.app",
    imageUrl: "https://placehold.co/600x400",
    imageAlt: "AI Chat Application Screenshot",
  },
  {
    title: "Flight Booking System",
    description:
      "A flight booking system built with modern technologies. Features include AI-powered message suggestions, multi-user support, and end-to-end encryption.",
    technologies: [
      technologies.react,
      technologies.node,
      technologies.mongodb,
    ],
    githubUrl: "https://github.com/M3LBY/ai-chat-app",
    demoUrl: "https://ai-chat-app.vercel.app",
    imageUrl: "https://placehold.co/600x400",
    imageAlt: "AI Chat Application Screenshot",
  },
];
