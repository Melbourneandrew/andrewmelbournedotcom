import { Project } from "./ProjectTemplate";

export const technologies = {
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
  capacitor: "Capacitor JS",
};

export const projects: Project[] = [
  {
    title: "Banter",
    description:
      "Provide an OpenAI API Key and prompt a model to have a lively conversation with itself about a given topic.",
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
      "Retrieval Augmented Generation chatbot that roleplays as the main character of the book 'Moral Code'.",
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
    date: "4/2024",
  },
  {
    title: "Moist Meter (HackUTA 2023)",
    description:
      "IoT solution to predict the likelihood of mold growth by monitoring moisture levels in walls. The system provides real-time alerts and visual heat maps, helping property owners identify and address potential moisture issues before mold develops. Won 1st place in the State Farm sponsor challenge and 1st place overall.",
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
    title: "Study Savant (UTD HackAI 2023)",
    description:
      "Tutoring chatbot doing RAG over textbooks and user lecture notes built into notion. We didn't take screenshots of this one unfortunately but there is a video demo on the devpost.",
    technologies: [
      technologies.nextjs,
      technologies.openai,
      "Pinecone DB",
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/8a5843f9-3219-4232-0215-cc318260b200/public",
    githubUrl: "https://github.com/Melbourneandrew/UTDHackAI",
    devpostUrl: "https://devpost.com/software/studysavant",
    date: "4/2023",
  },
  {
    title: "Chrono Snap (Cartesi Hackathon 2023)",
    description:
      "POC system that signs photos taken with the in-app camera and records them on the Ethereum blockchain network as a Cartesi Notice. This is to verify that each image and its metadata (timestamp, location) are genuine and not AI-generated. Won 3rd place",
    technologies: [
      technologies.react,
      technologies.capacitor,
      "Cartesi",
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/df6f9566-9484-4ed0-ca0d-b65793886800/public",
    githubUrl:
      "https://github.com/ephraim888sun/Hack-Cartesi-2023",
    devpostUrl: "https://devpost.com/software/chronosnap",
    date: "4/2023",
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
    title: "Timely Travel (TamuHack 2023)",
    description:
      "Predictive model trained on nine years of real-time data provides travelers with accurate flight arrival and departure times. Integrates Duffel API for in-app booking.",
    technologies: [
      technologies.vue,
      technologies.capacitor,
      technologies.golang,
      "MySql",
      "Duffel API",
    ],
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/52453135-71a7-4f41-f97c-5f01d9370f00/public",
    githubUrl: "https://github.com/Raajheer1/timely-travel",
    devpostUrl: "https://devpost.com/software/timelytravel",
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
      "Portfolio optimization tool that analyzes an investor's stock, savings, and bond holdings to assess risk and recommend optimal asset allocation for maximizing annual expected return within a chosen risk tolerance, using key macroeconomic indicators like stock market trends, treasury bonds, inflation, and sector performance. Won 1st place in the Goldman Sachs sponsor challenge and 3rd place overall.",
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
      "Social media site using sentiment analysis to prevent users from making negative posts. Social experiment designed to explore the extremes of censorship and content moderation.",
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
    title: "Image Puzzle Solving (TAMU Datathon 2022)",
    description:
      "Challenged to unscramble 2x2 image puzzles. Solution analyzed edge patterns using a heuristic algorithm that combines standard deviation and grayscale difference metrics, achieving rapid edge comparison. Additional approach used a machine learning model trained to predict correct orientations.",
    technologies: [
      technologies.python,
      technologies.tensorflow,
      technologies.golang,
    ],
    githubUrl: "https://github.com/Raajheer1/tamudatathon-2022",
    date: "10/2022",
  },
  {
    title: "Room Service (HackDFW 2022)",
    description:
      "Inspired by teammate who worked in a call center placing food orders for hospital patients. He was required to check their order against any dietary restrictions the doctors had placed on the patient. It was emotionally difficult for patients to hear that they couldn't have the food they picked out on the menu but didn't comply with their restrictions. He wanted to develop an app that would allow patients to place their order while only being shown the food options that complied with their restrictions.",
    technologies: [
      technologies.react,
      technologies.node,
      technologies.mongodb,
    ],
    githubUrl:
      "https://github.com/jduhking/dietary-service-app",
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/97df3d25-287f-441f-12d8-30e0593bba00/public",
    date: "9/2022",
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
    date: "5/2022",
  },
  {
    title: "Filance (TamuHack 2022)",
    description:
      "Financial organization for gig economy workers. Enables freelancers to manage clients,  send invoices, and track growth.",
    technologies: [technologies.vue, technologies.node],
    githubUrl: "https://github.com/Raajheer1/TAMUHack2022",
    devpostUrl: "https://devpost.com/software/filance",
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/99baeb2d-7c0d-44b0-a69c-64b03a313500/public",
    date: "1/2022",
  },
  {
    title: "Ford Rent (Ford Connect Hackathon)",
    description:
      "Utilized the Ford Connect API to build a multi-sided marketplace for renting Ford vehicles.",
    technologies: [
      technologies.flutter,
      technologies.node,
      technologies.mongodb,
    ],
    devpostUrl: "https://devpost.com/software/ford-rent",
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/49b3c14f-a1da-462a-e060-3e5374f1aa00/public",
    date: "7/2021",
  },
  {
    title: "Coaxial (Snakes and Hackers)",
    description:
      "2-player online board game. Open play lobbies. Skill-based matchmaking (kind of). Supercharged Tik-tak-toe.",
    technologies: ["jQuery", "Socket.io"],
    devpostUrl: "https://devpost.com/software/coaxial",
    githubUrl:
      "https://github.com/Melbourneandrew/Board-Game-Hack",
    imageUrl:
      "https://imagedelivery.net/tQa_QONPmkASFny9ZSDT4A/d3e9a735-725f-41d1-f6f9-667d80405400/public",
    date: "1/2021",
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
