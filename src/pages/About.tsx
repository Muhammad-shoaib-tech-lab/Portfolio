import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Muhammad Shoaib Sadiq</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        I am a Software Engineer specializing in the MERN stack, with strong skills in MongoDB, Express.js, React.js, and Node.js. I am passionate about writing clean, efficient, and maintainable code while building fast and scalable web applications. I enjoy creating intuitive user interfaces with React and developing powerful backend APIs with Node and Express. Constantly learning and improving, I stay updated with modern development practices to deliver high-quality, performant solutions.
      </p>
      <p>
        I am currently studying in the 3rd semester at the University of Agriculture, Faisalabad. I am honored to have received the Honhar Scholarship and a laptop awarded by the Chief Minister of Punjab. I continue to work hard, learn new technologies, and grow my expertise to build high-quality and impactful web applications
      </p>
    </motion.section>
  );
};
