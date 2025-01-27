import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gssoc,
  wild,
  money,
  bankist,
  chatty,
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
    name: "HTML 5",
    icon: html,
  },
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "GSSOC",
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
    name: "Bookings Manager",
    description:
      "This application streamlines hotel operations with features like cabin and booking management, user authentication, and sales statistics. It includes a dashboard for key insights, customizable settings, and tools for managing guests, check-ins, and payments. Users can easily update data, upload images, and toggle a dark mode for accessibility. Designed exclusively for hotel employees, it ensures secure and efficient management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wild,
    source_code_link: "https://wild-oasis-lyart.vercel.app/",
  },
  {
    name: "Chatty",
    description:
      "A real-time messaging application built using the MERN stack (MongoDB, Express.js, React, Node.js), Socket.IO, and styled with Tailwind CSS. This application allows users to engage in seamless and instant communication with the following key features: Real-Time Messaging: Instant communication using WebSocket technology powered by Socket.IO. User-Friendly Interface: Clean and modern design crafted with Tailwind CSS for an intuitive user experience.Media Support: Users can send text messages and upload images, with images securely hosted using Cloudinary.Persistent Chat History: All conversations are stored in a MongoDB database and retrieved efficiently, enabling users to view their chat history.",
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
    source_code_link: "https://fullstack-chat-app-1-57jj.onrender.com",
  },
  {
    name: "MoneyMate",
    description:
      "Developed a frontend application. User Authentication: Secure login functionality to ensure user privacy and data security. Dummy data --> user1: dm pin:3333 user2: gs pin:4444 You can login with these dummy info and explore the application. Money Transfer: Easily transfer money to other users within the application. Loan Requests: Request loans from the bank and manage repayments. Transaction History: Display a detailed history of all deposits and withdrawals.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: money,
    source_code_link: "https://money-mate-465.netlify.app/",
  },
  {
    name: "Bankist",
    description:
      "Interactive Elements: Includes interactive features like buttons, forms, and animations to enhance user engagement.Clean Layout: A well-structured layout with intuitive navigation, providing easy access to different sections of the website. Smooth Navigation: Implemented smooth and efficient navigation.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bankist,
    source_code_link: "https://exquisite-panda-e868cf.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
