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
    title: "Banter",
    description:
      "Provide an OpenAI API Key and prompt a model tohave a lively debate with itself about a given topic.",
    technologies: [technologies.nextjs, technologies.openai],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/b5dd7f43-6029-4359-fd61-4530a0d04b00/public",
    githubUrl: "https://github.com/Melbourneandrew/banter-ai",
    demoUrl: "https://banter.melbournedev.com/",
    date: "6/2024",
  },
  {
    title: "Elly Bot",
    description:
      "Retrieval Augmented Generation chatbot that roleplays as the main character of the book 'Moral Code'. ",
    technologies: [
      technologies.react,
      technologies.node,
      technologies.openai,
      "Pinecone DB",
      technologies.rag,
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/e01cc1af-954c-4624-f544-0321d03e2000/public",
    githubUrl: "https://github.com/Melbourneandrew/elly-bot-3",
    demoUrl: "https://elly.melbournedev.com/",
    date: "4/2024",
  },
  {
    title: "Moist Meter (HackUTA 2023)",
    description:
      "IoT solution to predict the likleyhood of mold growth by monitoring moisture levels in walls. The system provides real-time alerts and visual heat maps, helping property owners identify and address potential moisture issues before mold develops.",
    technologies: [
      technologies.react,
      technologies.python,
      technologies.node,
      technologies.mqtt,
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/0b6a760f-5f7a-4579-0b24-d3bdd572c000/public",
    githubUrl: "https://github.com/jduhking/MoistMeter",
    devpostUrl:
      "https://devpost.com/software/moist-meter-nj04ti",
    date: "10/2023",
  },
  {
    title: "Moist Meter (HackUTA 2023)",
    description:
      "IoT solution to predict the likleyhood of mold growth by monitoring moisture levels in walls. The system provides real-time alerts and visual heat maps, helping property owners identify and address potential moisture issues before mold develops.",
    technologies: [
      technologies.react,
      technologies.python,
      technologies.node,
      technologies.mqtt,
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/0b6a760f-5f7a-4579-0b24-d3bdd572c000/public",
    githubUrl: "https://github.com/jduhking/MoistMeter",
    devpostUrl:
      "https://devpost.com/software/moist-meter-nj04ti",
    date: "10/2023",
  },
  {
    title: "TutorAI (RowdyHacks 2023)",
    description:
      "Course-specific tutor that uses a vector index to reference the course textbook whenever the user asks a question. Uses OpenAI embeddings and chat competitions to index textbooks and answer user questions. Won Best use of Google Cloud.",
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
    title: "Horizon (HackUTD IX)",
    description:
      "Portfolio optimization tool that analyzes an investor's stock, savings, and bond holdings to assess risk and recommend optimal asset allocation for maximizing annual expected return within a chosen risk tolerance, using key macroeconomic indicators like stock market trends, treasury bonds, inflation, and sector performance.",
    technologies: [
      technologies.vue,
      technologies.golang,
      "AlphaVantage API",
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/ce70f85c-bea6-49e9-5f7c-9c1569e52800/public",
    githubUrl: "https://github.com/Raajheer1/hackutd-ix",
    devpostUrl: "https://devpost.com/software/horizon-c4h13j",
    date: "11/2022",
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
