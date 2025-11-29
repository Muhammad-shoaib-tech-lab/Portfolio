import { motion } from 'framer-motion';
import { IconBallpen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My education history';
  // mockup education data
  const educations = [
    {
      id: 1,
      image: '/jpg.jpg',
      name: 'PAEC Foundation School',
      position: 'Matriculation Science',
      startDate: 'SEP 2020',
      endDate: 'Jan 2022',
      duration: '885/1100 & 80%',
      location: 'FSD',
    },
     {
      id: 2,
      image: '/jpg.jpg',
      name: 'Punjab Group of College',
      position: 'Pre-Engineering',
      startDate: 'SEP 2022',
      endDate: 'Jan 2024',
      duration: '914/1200 & 76.16%',
      location: ' FSD',
    },
     {
      id: 3,
      image: '/jpg.jpg',
      name: 'University of Agriculture Faisalabad',
      position: 'BS Computer Science',
      startDate: 'SEP 2024',
      endDate: 'Jan 2028',
      duration: '4 years',
      location: 'FSD',
    },
    
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBallpen />}
        label="Education"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
