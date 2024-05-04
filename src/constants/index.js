import {
  uiIcon,
  webIcon,
  androidIcon,
  analysisIcon,
  creatorIcon,
  testimonial_avatar,
  carrent,
  jobit,
  tripguide,
  arIcon,
  vedioIcon,
  SocialIcon,
  graphicIcon,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },{
    id: "Projects",
    title: "Projects",
  },
  {
    id: "Carrier",
    title: "Carrier",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: webIcon,
  },
  {
    title: "Android / ios Development",
    icon: androidIcon,
  },
  {
    title: "UI/UX Design",
    icon: uiIcon,
  },
  {
    title: "Content Creator",
    icon: creatorIcon,
  },
];

const experiences = [
  {
    title: "Web Development",
    icon: webIcon,
    iconBg: "#E6DEDD",
  },
  {
    title: "Android/ios Development",
    icon: androidIcon,
    iconBg: "#E6DEDD",
  },
  {
    title: "UI/UX Design",
    icon: uiIcon,
    iconBg: "#E6DEDD",
  },
  {
    title: "AR/VR Development",
    icon: arIcon,
    iconBg: "#E6DEDD",
  },
  {
    title: "Digital Marketing",
    icon: creatorIcon,
    iconBg: "#E6DEDD",
   
  },
  {
    title:"Vedio Editing",
    icon: vedioIcon,
    iconBg: '#E6DEDD',
  },
  {
    title:"Social Media Marketing",
    icon: SocialIcon,
    iconBg: '#E6DEDD',
  },
  {
    title:"Graphic Design",
    icon: graphicIcon,
    iconBg: '#E6DEDD',
  },
  {
    title:"Data Analysis",
    icon: analysisIcon,
    iconBg: '#E6DEDD',
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Aryan Singh",
    designation: "CFO",
    company: "Aavaland",
    image: testimonial_avatar,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Subham Pratap Singh",
    designation: "CEO",
    company: "luxabord",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, testimonials, projects };


