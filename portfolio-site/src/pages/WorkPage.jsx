import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import PageEndNav from '../components/PageEndNav';
import Footer from '../components/Footer';

export default function WorkPage({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  const projects = content.work.projects;

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar content={content} lang={lang} />

      {/* Project cards section - starts directly after navbar, uses global section spacing */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some', margin: '0px 0px -40px 0px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="px-6 sm:px-8 pt-page-top pb-section bg-dark-bg"
      >
        <div className="max-w-content mx-auto">
          {/* 3 project cards (reusing ProjectCard component) */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} lang={lang} />
            ))}
          </div>
        </div>
      </motion.section>

      <PageEndNav lang={lang} page="work" />
      <Footer content={content} />
    </div>
  );
}
