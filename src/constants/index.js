import {
  mobile,
  backend,
  creator,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import hoichoi from "../assets/company/hoichoi.png";
import snapgram from "../assets/snapgram.png";
import kmoviez from "../assets/kmoviez.png";
import snapgramlogo from "../assets/snapgramlogo.svg";
import kmoivezlogo from "../assets/kmoviezlogo.png";

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
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Hoichoi",
    icon: hoichoi,
    iconBg: "#383E56",
    date: "12 March 2024 - present",
    points: [
      "Developed a comprehensive job board, managing both frontend and backend components, using Next js and as for the database I used Mongo DB.",

      "Designed an intuitive user interface(UI) with Tailwind CSS, integrating features like job filtering and a detailed job information page.",
      "Implemented a user authentication system with Cloudflare Turnstile Captcha on the job application submission page, reducing spam and unauthorized submissions.",
      "Built an automated email system that sends confirmation emails to users upon successful job application submission by using SMTP.",
      " Integrated social media sharing functionality on the job details page to facilitate user engagement and sharing of job opportunities.",
      "Implemented Role-Based Access Control(RBAC) with three roles SuperAdmin, Admin and Executive. Executive can only create job. Admin cancreate, approve jobs which are created by Executive and shortlist applicants, and SuperAdmin can do everything be it create, approve, unpublish jobs and shortlist, unshortlist applicants. It can also create users for the above ROLES(SuperAdmin, Admin, Executive).",
      "Used JWT tokens for authentication, ensuring secure access to the admin pages and protecting sensitive operations. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Niraj proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Niraj does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Niraj optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SnapGram",
    description:
      "In 2023, I developed a responsive social media platform using React.js, Vite, and Appwrite for efficient account management, dynamic post creation, and seamless user interactions. React.js and Vite ensure a fast, responsive UI, while Appwrite facilitates efficient data storage and retrieval. Tailwind CSS was used for clean and visually appealing styling, enhancing the platform’s overall design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: snapgram,
    image_logo: snapgramlogo,
    source_code_link: "https://github.com/Niraj1910/socialApp",
    link_to_website: "https://social-media-two-teal.vercel.app/",
  },
  {
    name: "Kmoviez",
    description:
      "I led the development of Kmoviez, an interactive platform providing real-time insights into the latest movies and TV series trends using Javascript and React.js. The platform integrates Rapid API for content fetching and uses React Redux for efficient data management, React Infinite Scroll for smooth browsing, and React Player for immersive trailer viewing. This combination enhances the user experience with personalized viewing options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "IMDB api",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: kmoviez,
    image_logo: kmoivezlogo,
    source_code_link: "https://github.com/Niraj1910/KMoviez",
    link_to_website: "https://k-moviez.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
