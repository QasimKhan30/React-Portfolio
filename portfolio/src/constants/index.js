import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import experienceApple from "../assets/experience/experience-apple.png";
import experienceGMU from "../assets/experience/experience-GMU.png";
import experienceTxDOT from "../assets/experience/experience-TxDOT.png";

export const HERO_CONTENT = `I’m an AI enthusiast and problem-solver who thrives at the intersection of innovation and impact. From crafting intelligent trading bots to pushing the limits of software development, I harness the power of Python, Java, and JavaScript to build systems that turn bold ideas into reality. Let’s reimagine what technology can do—together.`;

export const ABOUT_TEXT = `Fueled by curiosity and a passion for innovation, I specialize in bringing complex ideas to life through code. My journey spans building sentiment-driven trading bots, optimizing OS kernels, and engineering scalable solutions. When I’m not diving into the world of AI, I’m exploring the latest tech trends or contributing to open-source communities. For me, every challenge is an opportunity to create something extraordinary.`;


export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "AI Intern",
    company: "Texas Department of Transportation",
    image: experienceTxDOT,
    description: `Contributed to the development and deployment of generative AI solutions using AWS SageMaker. Collaborated closely with AI specialists to develop and refine deep learning algorithms. Gained hands-on experience in machine learning workflows, model training, and iterative improvement of AI-driven processes.`,
    technologies: ["AWS SageMaker", "Generative AI", "Data Science"],
  },
  {
    year: "2023 - 2024",
    role: "Specialist",
    company: "Apple",
    image: experienceApple,
    description: `Provided expert technical support and troubleshooting for Apple devices, ensuring an exceptional customer experience. Leveraged deep knowledge of Apple technologies to resolve complex issues and educate customers on product usage. Played a key role in onboarding and mentoring new staff, contributing to a highly skilled and efficient team.`,
    technologies: ["Troubleshooting", "Customer Support"],
  },
  {
    year: "2021 - 2023",
    role: "Teaching Assistant",
    company: "George Mason University",
    image: experienceGMU, 
    description: `Supported undergraduate education by simplifying complex computer science concepts for students through clear communication and organized review sessions. Collaborated with professors to prepare, and enhance course materials. Created a supportive learning environment during office hours, helping students achieve academic success.`,
    technologies: ["Teaching", "Communication", "C"],
  },
];

export const PROJECTS = [
  {
    title: "Cryptocurrency Trading Bot with Sentiment Analysis",
    image: project1,
    description:
      "An advanced trading bot fetching and analyzing Twitter data using sentiment analysis to optimize trading strategies.",
    technologies: ["Python", "TensorFlow", "FinBERT", "API"],
  },
  {
    title: "Task Manager",
    image: project2,
    description:
      "A task management system implementing Unix-like process management and optimized task scheduling algorithms.",
    technologies: ["C", "IPC", "Unix Principles"],
  },
  {
    title: "Race Car Grand Prix Tournament Software",
    image: project3,
    description:
      "Developed a system for remote-controlled race cars using Raspberry Pi, managing bi-weekly sprints in an Agile environment.",
    technologies: ["Python", "Agile Development", "Raspberry Pi"],
  },
  {
    title: "Hospital Database Management",
    image: project4,
    description:
      "Designed and manipulated hospital databases using SQL and MongoDB, integrating efficient data retrieval interfaces.",
    technologies: ["SQL", "MongoDB", "Data Manipulation"],
  },
];

export const CONTACT = {
  address: "Austin, TX",
  email: "qasimkhan@utexas.edu",

};
