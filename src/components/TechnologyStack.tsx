"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import { 
  FaReact, 
  FaVuejs, 
  FaAngular, 
  FaNodeJs, 
  FaPython, 
  FaJava,
  FaPhp,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaCloud,
  FaCode,
  FaPaintBrush
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiDjango,
  SiSpring,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiJenkins,
  SiGooglecloud,
  SiTerraform,
  SiGraphql,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiWebpack,
  SiVite,
  SiJest,
  SiCypress,
  SiElasticsearch,
  SiRabbitmq,
  SiNginx,
  SiApache,
  SiLinux,
  SiUbuntu,
  SiCentos,
  SiPostman,
  SiFigma,
  SiSlack,
  SiJira,
  SiConfluence,
  SiGithub,
  SiGitlab,
  SiBitbucket
} from 'react-icons/si';

const TechnologyStack = () => {
  const technologies = {
    all: [
      // Frontend
      { name: 'React', icon: <FaReact className="w-8 h-8" />, category: 'Frontend', color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, category: 'Frontend', color: '#000000' },
      { name: 'Vue.js', icon: <FaVuejs className="w-8 h-8" />, category: 'Frontend', color: '#4FC08D' },
      { name: 'Angular', icon: <FaAngular className="w-8 h-8" />, category: 'Frontend', color: '#DD0031' },
      { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, category: 'Frontend', color: '#3178C6' },
      { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, category: 'Frontend', color: '#F7DF1E' },
      { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8" />, category: 'Frontend', color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8" />, category: 'Frontend', color: '#1572B6' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, category: 'Frontend', color: '#06B6D4' },
      { name: 'Bootstrap', icon: <SiBootstrap className="w-8 h-8" />, category: 'Frontend', color: '#7952B3' },
      
      // Backend
      { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, category: 'Backend', color: '#339933' },
      { name: 'Python', icon: <FaPython className="w-8 h-8" />, category: 'Backend', color: '#3776AB' },
      { name: 'Java', icon: <FaJava className="w-8 h-8" />, category: 'Backend', color: '#007396' },
      { name: 'PHP', icon: <FaPhp className="w-8 h-8" />, category: 'Backend', color: '#777BB4' },
      { name: 'Express.js', icon: <SiExpress className="w-8 h-8" />, category: 'Backend', color: '#000000' },
      { name: 'Django', icon: <SiDjango className="w-8 h-8" />, category: 'Backend', color: '#092E20' },
      { name: 'Spring', icon: <SiSpring className="w-8 h-8" />, category: 'Backend', color: '#6DB33F' },
      { name: 'Laravel', icon: <SiLaravel className="w-8 h-8" />, category: 'Backend', color: '#FF2D20' },
      { name: 'GraphQL', icon: <SiGraphql className="w-8 h-8" />, category: 'Backend', color: '#E10098' },
      
      // Databases
      { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, category: 'Databases', color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" />, category: 'Databases', color: '#336791' },
      { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, category: 'Databases', color: '#4479A1' },
      { name: 'Redis', icon: <SiRedis className="w-8 h-8" />, category: 'Databases', color: '#DC382D' },
      { name: 'Elasticsearch', icon: <SiElasticsearch className="w-8 h-8" />, category: 'Databases', color: '#005571' },
      
      // DevOps & Cloud
      { name: 'Docker', icon: <FaDocker className="w-8 h-8" />, category: 'DevOps', color: '#2496ED' },
      { name: 'Kubernetes', icon: <SiKubernetes className="w-8 h-8" />, category: 'DevOps', color: '#326CE5' },
      { name: 'AWS', icon: <FaAws className="w-8 h-8" />, category: 'DevOps', color: '#FF9900' },
      { name: 'Google Cloud', icon: <SiGooglecloud className="w-8 h-8" />, category: 'DevOps', color: '#4285F4' },
      { name: 'Azure', icon: <FaCloud className="w-8 h-8" />, category: 'DevOps', color: '#0078D4' },
      { name: 'Jenkins', icon: <SiJenkins className="w-8 h-8" />, category: 'DevOps', color: '#D24939' },
      { name: 'Terraform', icon: <SiTerraform className="w-8 h-8" />, category: 'DevOps', color: '#623CE4' },
      { name: 'Nginx', icon: <SiNginx className="w-8 h-8" />, category: 'DevOps', color: '#009639' },
      
      // Tools & Others
      { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, category: 'Tools', color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub className="w-8 h-8" />, category: 'Tools', color: '#181717' },
      { name: 'VS Code', icon: <SiVisualstudiocode className="w-8 h-8" />, category: 'Tools', color: '#007ACC' },
      { name: 'Figma', icon: <SiFigma className="w-8 h-8" />, category: 'Tools', color: '#F24E1E' },
      { name: 'Jest', icon: <SiJest className="w-8 h-8" />, category: 'Tools', color: '#C21325' },
      { name: 'Cypress', icon: <SiCypress className="w-8 h-8" />, category: 'Tools', color: '#17202C' }
    ]
  };

  // Filter technologies by category
  const getFilteredTechnologies = (category: string) => {
    if (category === 'all') return technologies.all;
    return technologies.all.filter(tech => tech.category.toLowerCase() === category.toLowerCase());
  };

  const tabs = [
    { value: 'all', label: 'All Technologies', count: technologies.all.length },
    { value: 'frontend', label: 'Frontend', count: getFilteredTechnologies('frontend').length },
    { value: 'backend', label: 'Backend', count: getFilteredTechnologies('backend').length },
    { value: 'databases', label: 'Databases', count: getFilteredTechnologies('databases').length },
    { value: 'devops', label: 'DevOps & Cloud', count: getFilteredTechnologies('devops').length },
    { value: 'tools', label: 'Tools & Others', count: getFilteredTechnologies('tools').length }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Technology Stack
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We leverage cutting-edge technologies and industry-leading tools to deliver 
            robust, scalable, and innovative solutions for your business needs.
          </motion.p>
        </div>

        {/* Technology Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs.Root defaultValue="all" className="w-full">
            {/* Tab List */}
            <Tabs.List className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-blue-400 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <span>{tab.label}</span>
                  <span className="ml-2 px-2 py-0.5 bg-gray-200 dark:bg-gray-600 text-xs rounded-full">
                    {tab.count}
                  </span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {/* Tab Content */}
            {tabs.map((tab) => (
              <Tabs.Content key={tab.value} value={tab.value} className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                  {getFilteredTechnologies(tab.value).map((tech, index) => (
                    <motion.div
                      key={`${tab.value}-${tech.name}`}
                      className="group flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      {/* Technology Icon */}
                      <div 
                        className="mb-3 group-hover:scale-110 transition-transform duration-300"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      
                      {/* Technology Name */}
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tech.name}
                      </h3>
                      
                      {/* Category Badge */}
                      <span className="mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        {tech.category}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Need a Custom Technology Solution?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert team can help you choose the right technology stack for your project. 
              Let's discuss your requirements and build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;





