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
  python: "Python",
  flutter: "Flutter",
  nextjs: "Next.js",
  tensorflow: "TensorFlow",
  mqtt: "MQTT",
  rag: "RAG",
};

export const projects: Project[] = [
  {
    title: "TutorAI (RowdyHacks 2023)",
    description:
      "Course-specific tutor using a vector index to reference course textbook whenever the user asks a question. Uses OpenAI embeddings and chat competitions to index the book and answer the questions. Won Best use of Google Cloud.",
    technologies: [
      technologies.react,
      technologies.python,
      technologies.openai,
      technologies.rag,
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/3056da39-2988-4c5c-dc45-72ffe3df3100/public",
    githubUrl: "https://github.com/Melbourneandrew/rowdyhack8",
    devpostUrl: "https://devpost.com/software/tutorai-0f9182",
    date: "3/2023",
  },
  {
    title: "Landscaper Asset Tracking (Robin Autopilot)",
    description:
      "POC asset tracking system and landscaper dashboard. Used accelerometer data from IoT beacons attached to landscaping equipment to inform operators about jobsite usage. Collected data in the field and trained a model to identify the specific motion of work tasks.",
    technologies: [
      technologies.nextjs,
      technologies.node,
      technologies.tensorflow,
      technologies.python,
      technologies.mqtt,
      technologies.mongodb,
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/2851edd6-85b4-4bed-06a6-dbad098c4d00/public",
    date: "1/2023",
  },
  {
    title: "Lets Park Here",
    description:
      "Parking software for apartment complexes. Contracted to build MVP and hand off to offshore developers.",
    technologies: [
      technologies.vue,
      technologies.node,
      technologies.mongodb,
    ],
    githubUrl: "https://github.com/Melbourneandrew/lets-park",
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/13258677-2afc-4259-eb65-999cbe3bc000/public",
    date: "10/2022",
  },
  {
    title: "Eleos Social",
    description:
      "Social media site using sentiment analysis to prevent users from making negative posts. Social expierement designed to explore the extremes of censorship and content moderation.",
    technologies: [
      technologies.vue,
      technologies.node,
      technologies.python,
      technologies.openai,
      technologies.mongodb,
    ],
    githubUrl:
      "https://github.com/Melbourneandrew/project-eleos",
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/71cc20c5-bf6a-4d84-ebe1-b093cab4c900/public",
    date: "10/2022",
  },
  {
    title: "Melby Social",
    description:
      "Prototype social media network where posts can be minted as NFTs on the Solana blockchain. When you pay to mint a post, the original poster recieves a royalty and the post is re-posted on the minters account. The idea was to create a marketplace for viral content where those who create and share content are rewarded for the attention their posts recieve.",
    technologies: [
      technologies.vue,
      technologies.node,
      technologies.mongodb,
      "Metaplex",
    ],
    githubUrl: "https://github.com/Melbourneandrew/melby-web",
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/0bdae1c6-3f85-4de9-e289-ad68bb725300/public",
    date: "05/2022",
  },
  {
    title: "Meme Sort",
    description:
      "Flutter app that aggregates memes in your camera roll into a single collection.",
    technologies: [technologies.flutter],
    date: "6/2019",
  },
  {
    title: "Reddit Scrape",
    description:
      "Scrapes hot images from a given subreddit. I used this to collect memes to train a classification model.",
    technologies: [technologies.python],
    githubUrl:
      "https://github.com/Melbourneandrew/redditscrape",
    date: "5/2019",
  },
];
