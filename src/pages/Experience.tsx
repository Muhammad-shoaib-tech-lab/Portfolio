import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';
import { IconClockPlay } from '@tabler/icons-react';

export const Experience = () => {
const { section } = SectionMotion;
 const sectionDescription = 'My proffesional career journey';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Muhammad Shoaib Sadiq</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
I am a Software Engineer specializing in the MERN stack, with strong expertise in MongoDB, Express.js, React.js, and Node.js. I am passionate about writing clean, efficient, and maintainable code while building fast, scalable, and high-performance web applications. I enjoy crafting intuitive user interfaces with React and developing robust backend APIs using Node and Express.

Currently in my 3rd semester at the University of Agriculture, Faisalabad, I am honored to be a recipient of the Honhar Scholarship and a laptop awarded by the Chief Minister of Punjab. These achievements motivate me to continue learning, growing, and staying updated with modern development practices.      </p>
      <p>
      I also completed a 4-month MERN stack internship at Genius Mind Zone, where I worked on real-time, production-level projects, including Complya.com. This experience strengthened my practical development skills, improved my understanding of scalable architectures, and enhanced my ability to build impactful, real-world applications.
      </p>
    </motion.section>
  );
};
