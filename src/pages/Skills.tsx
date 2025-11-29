import { motion } from 'framer-motion';
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandSvelte,
  IconBrandTailwind,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my skills';
  // mockup skills data
  const skills = [
    { label: 'HTML', icon: <IconBrandReact /> },
    { label: 'CSS', icon: <IconBrandNextjs /> },
    { label: 'JS', icon: <IconBrandVue /> },
    { label: 'Tailwind CSS', icon: <IconBrandNuxt /> },
    { label: 'Bootstrap', icon: <IconBrandTailwind /> },
    { label: 'React js', icon: <IconBrandSvelte /> },
    { label: 'Express js', icon: <IconBrandTailwind /> },
    { label: 'Node.js', icon: <IconBrandTailwind /> },
    { label: 'MongoDB', icon: <IconBrandTailwind /> },

  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
