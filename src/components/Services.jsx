import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
{/* 
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
         Our Services.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");


// import React from 'react'

// function Services() {
//   return (
//     <>
//     <section class="text-gray-600 body-font bg-white">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-col text-center w-full mb-20">
//       <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Services</h1>
//       {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
//     </div>
//     <div class="flex flex-wrap -m-2">
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium">Web Development</h2>
//             {/* <p class="text-gray-500">UI Designer</p> */}
//           </div>
//         </div>
//       </div>
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium">UI/UX Design</h2>
//             {/* <p class="text-gray-500">CTO</p> */}
//           </div>
//         </div>
//       </div>
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium">Android/ios Development</h2>
//             {/* <p class="text-gray-500">Founder</p> */}
//           </div>
//         </div>
//       </div>
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium">AR/VR Development</h2>
//             {/* <p class="text-gray-500">DevOps</p> */}
//           </div>
//         </div>
//       </div>
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium">Data Analysis</h2>
//             {/* <p class="text-gray-500">Software Engineer</p> */}
//           </div>
//         </div>
//       </div>
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium"></h2>
//             <p class="text-gray-500">UX Researcher</p>
//           </div>
//         </div>
//       </div>
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium">Atticus Finch</h2>
//             <p class="text-gray-500">QA Engineer</p>
//           </div>
//         </div>
//       </div>
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
//             <p class="text-gray-500">System</p>
//           </div>
//         </div>
//       </div>
//       <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
//         <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//           <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
//             <p class="text-gray-500">Product Manager</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// </>
//   )
// }

// export default Services
