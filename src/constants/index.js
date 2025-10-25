import {
  web,
  html,
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gssoc,
  chatty,
  nextjs,
  python,
  postgresql,
  django,
  ecommerce,
  healthAssistant,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "github",
    title: "GitHub",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PostgreSql",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "GSSOC'24",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Collaborated with a team of developers to design and implement user-friendly, responsive, and visually appealing interfaces",
      "Refactored existing codebase to enhance readability,maintainability, and scalability following best coding practices.",
      "Converted Figma designs into functional web pages using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and optimal performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Divyanshu proved me wrong.",
    name: "Govind Sharma",
    designation: "Full-Stack developer",
    company: "JabRod",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "Developed a fully functional eCommerce platform using the MERN stack and NEXT JS. Integrated Auth.js for secure user authentication and session management. Implemented Razorpay payment gateway for seamless and secure online transactions",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NextJs",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/Divyanshu-Mishra9620/E-Commerce-frontend",
    deployed_link: "https://e-commerce-frontend-murex-eta.vercel.app/",
  },
  {
    name: "AI-Health-Assistant",
    description:
      "Tech Stack: Next.js, Django, Python, PostgreSQL, Tailwind CSS, OpenAI API, JWT Auth, TypeScript. Built a full-stack AI-powered health assistant web application that allows users to interact with a chatbot for instant health diagnosis based on their symptoms.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
    ],
    image: healthAssistant,
    source_code_link:
      "https://github.com/Divyanshu-Mishra9620/Health-Assistant",
    deployed_link: "https://health-assistant-omega.vercel.app/",
  },
  {
    name: "Chatty",
    description:
      "A real-time messaging application built using the MERN stack (MongoDB, Express.js, React, Node.js), Socket.IO, and styled with Tailwind CSS. This application allows users to engage in seamless and instant.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: chatty,
    source_code_link:
      "https://github.com/Divyanshu-Mishra9620/Fullstack-chat-app",
    deployed_link: "https://fullstack-chat-app-1-57jj.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
